"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Product, Category, ProductCategory
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from base64 import b64encode
import os
import json


from flask_jwt_extended import create_access_token, jwt_required

# libreria para generar hash
from werkzeug.security import generate_password_hash, check_password_hash 

def set_password(password,salt):
    return generate_password_hash(f'{password} {salt}')

def check_password(hash_password, password, salt):
    return check_password_hash(hash_password, f"{password} {salt}")

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

@api.route('/user', methods = ["GET"])
@jwt_required() # con este decorador si o si hay que mandar token para acceder
def get_users():
    
    user  = User()
    user  = user.query.all()
    user = list(map(lambda user : user.serialize(),user))
    return jsonify(user), 200

@api.route('/user', methods = ['POST'])
def add_user():
    body = request.json

    body_email = body.get("email", None)
    body_password = body.get("password", None)
    # body_salt = body.get("salt", None)

    if body_email is None or body_password is None:
        return jsonify({"Mensaje": "Bad credentials"}), 400
    
    salt = b64encode(os.urandom(32)).decode("utf-8")
    body_password = set_password(body_password,salt) # convierte la contrasena en un hash
    user = User(email = body_email, password = body_password, salt = salt) # se crea el objeto pero aun no se manda a la base de datos.

    # Se valida si el usuario creado existe
    user_exist = user.query.filter_by(email = body_email).one_or_none() # busca y valida si existe el email.
    print(user_exist)

    if user_exist is not None: 
        return jsonify({"Message":"User already exits"}),400
    else: 
        try:
            db.session.add(user)
            db.session.commit()
            return jsonify({"Message": "User created"}), 201
        except Exception as error:
            print(error.args)
            db.session.rollback()
            return jsonify({"Message":f"error : {error}"}), 500

        

# 
@api.route('/user/<int:user_id>', methods = ['PUT'])

def update_user(user_id):
    body = request.json
    

    body_email = body.get('email', None)
    body_password = body.get("password", None)

    if body_password is None or body_email  is None:
        return jsonify({"Message": "Somethings is wrong with the credentials"}), 400

    user = User()
    # chequear si existe en la base de datos
    user = user.query.get(user_id)
    

    if user is None: 
        return jsonify({"Message":"User doenst exist"}), 404
    else :
            
        try:
            user.email = body_email
            user.password = body_password
            db.session.commit()
            return jsonify({"Message": "usuario actualizado correctamente"}), 200
        except Exception as error:
            print(error)
            db.session.rollback()
            return jsonify({"Message": "Algo ha ocurrido"}),500
       

@api.route('/login', methods = ["POST"])
def login():
    data = request.json

    email =  data.get("email", None)
    password = data.get("password", None)

    if email is None or password is None:
        return jsonify({"Message": "Somethings is wrong with the credentials"}), 400

    user  = User()
    user = user.query.filter_by(email = email).one_or_none()

    if user is None :
        return jsonify({"Message": "User not found!"}),404
    else : 

        if check_password(user.password, password, user.salt):
            # al token se le pasa un identity, un valor unequivoco
            converted_id = str(user.id)
            token  = create_access_token(identity=converted_id)
            return jsonify({"token":token}),200
        else:
            return jsonify("No tienes permiso"),400



#  A partir de aqui, se muestra las rutas  de los productos 


# POST  /product

@api.route("/product", methods = ["POST"])  
def add_product():
    
    data_form = request.form 
    #  data_files = request.files
    
    name  = data_form.get("name", None)
    description = data_form.get("description", None)
    price = data_form.get("price", None)
    category = data_form.get("category", None)

    # print(name, description, price, category)
    """
        name
        description
        price
        category_id
        image
        user_id
    """

    product = Product(
        name=name,
        description=description,
        price=price,
        user_id=1,
    )
    db.session.add(product) 
    db.session.flush()

    try:

        product_category = ProductCategory(
            category_id= category,
            product_id= product.id
        )

        db.session.add(product_category)
        db.session.commit()
        return jsonify("user guardado exitosamente"), 201
    except Exception as err:
        return jsonify(f"Error: {err.args}")

    # if name is None or description is None or price is None or category is None:
    #     return jsonify( {"Message": "Syntax error"}), 400
    # else:
    #     user = User()
    #     products = Product()

    #     products = products.query.all()
    #     user = user.query.all()

    #     # agregalo por el admin y luego ejecuta el endpoind para ver la consola

    #     try:
    #         product = Product(user = user, name = name, description =description, price = price)
    #         product_category = ProductCategory(category_id = category, product_category = 5)

    #     except Exception as error:
    #         print(error)
        
    #     print(product.serialize())

  

    # return jsonify([]),200

    return jsonify("trabajando por usted"), 200



# POST  /categoria Population

@api.route('/categoria',methods = ['POST'])
def add_category():
    
    data_form = request.form
    category_name = data_form.get('name', None)

    if category_name is None:
        return jsonify({'Mensaje' : "Wrong body request"}), 400 

    category_name_list = category_name.split(",")

    for name in category_name_list:
        try:
            category = Category(name = name)
            db.session.add(category) 
        except Exception as error:
            print(error)
            db.session.rollback()
            return jsonify({'Something happend'}), 500
        
    db.session.commit()
    return jsonify( {"message" : "data populated"}), 200


@api.route('/productCategory', methods = ['POST'])
def add_product_category():

    category_list = Category()
    category_list = category_list.query.all()
    product_category = ProductCategory()

    for category in category_list:
        product_category = ProductCategory(category_id = category.get_id())
        print(product_category)
        db.session.add(product_category)

    db.session.commit()
    

    return jsonify([]), 200


