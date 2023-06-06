from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()


class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(32), unique=False, nullable=False)
    confirm_password = db.Column(db.String(32), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False, default=False)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    country = db.Column(db.String(30), nullable=False)
    zip_code = db.Column(db.String(30), nullable=False)
    phone_number = db.Column(db.String(20), nullable=False)
    favorites = db.relationship("Favorite", backref=db.backref("user"))
    profile_image = db.Column(db.String(255), nullable=True)
    products = db.relationship("Products", backref=db.backref("user"))
    address = db.Column(db.String(230), nullable=False)

    def __repr__(self):
        return f"<User {self.id}: {self.first_name} {self.last_name}>"

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "country": self.country,
            "phone_number": self.phone_number,
            "zip_code": self.zip_code,
            "profile_image": self.profile_image,
            "address": self.address,
            "favorites": [fav.serialize() for fav in self.favorites],
            "products": [product.serialize() for product in self.products],
        }

class Favorite(db.Model):
    __tablename__ = "favorite"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey("products.id"), nullable=False)

    def __repr__(self):
        return f"<Favorite: User {self.user_id} Product {self.product_id}>"

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "product_id": self.product_id
        }       


class Products(db.Model):
    __tablename__ = "products"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    category = db.Column(db.String(50), nullable=False)
    subcategory = db.Column(db.String(50), nullable=False)
    price = db.Column(db.Numeric(scale=2), nullable=False)
    weight = db.Column(db.String(30), nullable=False)
    length = db.Column(db.String(30), nullable=False)
    width = db.Column(db.String(30), nullable=False)
    height = db.Column(db.String(30), nullable=False)
    state = db.Column(db.String(30), nullable=False)
    description = db.Column(db.Text(), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    favorites = db.relationship("Favorite", backref=db.backref('products'))
    
    def __repr__(self):
        return f"<Products: User {self.user_id} {self.name} {self.category}>"

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "category": self.category,
            "subcategory": self.subcategory,
            "price": self.price,
            "weight": self.weight,
            "length": self.length,
            "width": self.width,
            "height": self.height,
            "state": self.state,
            "description": self.description,
            "favorites": [fav.serialize() for fav in self.favorites],
            "user_id": self.user_id,
        }