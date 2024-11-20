from flask_sqlalchemy import SQLAlchemy
from datetime import datetime, timezone
db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(180), unique=False, nullable=False)
    salt = db.Column(db.String(180), nullable = True) # cambiar a False
    avatar = db.Column(db.String(100), nullable = False, default = "https://i.pravatar.cc/300") # se guarda la referencia a la imagen    
    public_id_avatar = db.Column(db.String(100), nullable = True)
    created_at = db.Column(db.DateTime, nullable = False, default = datetime.now(timezone.utc))
    update_at = db.Column(db.DateTime, nullable = False, default = datetime.now(timezone.utc), onupdate=datetime.now(timezone.utc))

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Favorite(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable = False)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable = True)

class Product(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(80), nullable = False)
    description = db.Column(db.String(255), nullable = True)
    price = db.Column(db.Float, nullable = True)
    url_product = db.Column(db.String(255), nullable = False, default = "https://miro.medium.com/v2/resize:fit:1400/1*K4LP6vY33IGyF4TrJaDomA.png")
    categoria_id = db.Column(db.Integer, db.ForeignKey("categoria.id"), nullable  = True)


class Categoria(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(50), nullable = False )
    