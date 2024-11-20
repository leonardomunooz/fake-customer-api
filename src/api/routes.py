"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200
@api.route('/user', methods = ["GET"])
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
    body_salt = body.get("salt", None)

    if body_email is None or body_password is None or body_salt is None:
        return jsonify({"Mensaje": "Bad credentials"}), 400

    user = User(email = body_email, password = body_password, salt = body_salt)

    if user is  None : # ¿ El usuario existe ?
        return jsonify({"Message":"User  already exists"}) , 409
    else: # ¿ El usuario no existe ? 
        try:
            db.session.add(user)
            db.session.commit()
            return jsonify({"Message": "User created"}), 201
        except Exception as error:
            print(error.args)
            db.session.rollback()
            return jsonify({"Message":f"error : {error}"}), 500
