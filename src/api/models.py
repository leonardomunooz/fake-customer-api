from flask_sqlalchemy import SQLAlchemy
from datetime import datetime, timezone

db = SQLAlchemy()

class User(db.Model):
    __tablename__ : "user"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(180), unique=False, nullable=False)
    salt = db.Column(db.String(180), nullable = True) # cambiar a False
    avatar = db.Column(db.String(100), nullable = False, default = "https://i.pravatar.cc/300") # se guarda la referencia a la imagen    
    public_id_avatar = db.Column(db.String(100), nullable = True)
    api_key = db.Column(db.String(100), nullable = False, unique = True) # Se utiliza una logica parecida del salt  
    created_at = db.Column(db.DateTime, nullable = False, default = datetime.now(timezone.utc))
    update_at = db.Column(db.DateTime, nullable = False, default = datetime.now(timezone.utc), onupdate=datetime.now(timezone.utc))

    products = db.relationship("Product", back_populates= "user")
    product_favorites = db.relationship("FavoriteProduct", back_populates= "user") 

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "api_key" : self.api_key
            # do not serialize the password, its a security breach
        }

class FavoriteProduct(db.Model):
    __tablename__ : "favorite_product"
    id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable = False)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable = True)
    
    user = db.relationship("User")
    product = db.relationship("Product")
    

class Product(db.Model):
    __tablename__ : "product"
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(80), nullable = False , unique = True)
    description = db.Column(db.String(255), nullable = True)
    price = db.Column(db.Float, nullable = True)
    imagen = db.Column(db.String(255), nullable = False, default = "https://miro.medium.com/v2/resize:fit:1400/1*K4LP6vY33IGyF4TrJaDomA.png")
    imagen_id = db.Column(db.String(200), nullable =True)
    api_key = db.Column(db.String(200), nullable = True)

    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable = False)
    user = db.relationship("User")
    product_categories = db.relationship("ProductCategory", back_populates= "product")

    def __repr__(self):
        return f'Product {self.name} id : {self.id}'
    def serialize(self):
        return {
            "id" : self.id,
            "name": self.name,
            "description": self.description,
            "price": self.price,
            "user": self.imagen
            # "product_categories": self.product_categories
        }

class ProductCategory(db.Model):
    __tablename__ : "product_category"
    id = db.Column(db.Integer, primary_key = True)
    category_id = db.Column(db.Integer, db.ForeignKey("category.id"), nullable  = True)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable = True)

    category = db.relationship("Category")
    product = db.relationship("Product")

    def __repr__(self):
        return f'id : {self.category_id} {self.category}'

    def serialize(self):
      return {
           "id": self.id
            # do not serialize the password, its a security breach
        }

class Category(db.Model):
    __tablename__ : "category"
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(50), nullable = False, unique= True)
    product_categories = db.relationship("ProductCategory", back_populates= "category")

    def __repr__(self):
        return f'Category {self.name} id {self.id}' 
        # return f'Category {self.name} id {self.id}'

    def serialize(self):
      return {
            "id" : self.id,
            "name": self.name,
            # do not serialize the password, its a security breach
        }
    
    def get_id(self):
        return self.id