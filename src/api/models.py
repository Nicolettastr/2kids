from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()


class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(32), unique=False, nullable=False)
    confirm_password = db.Column(db.String(32), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False,
                          nullable=False, default=False)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    country = db.Column(db.String(30), nullable=False)
    # address = db.Column(db.String(30), nullable=False)
    zip_code = db.Column(db.String(30), nullable=False)
    phone_number = db.Column(db.String(20), nullable=False)
    favorites = db.relationship("Favorite", backref=db.backref("user"))
    profile_image = db.Column(db.String(255), nullable=True)

    def __repr__(self):
        return f"<User {self.id}: {self.first_name} {self.last_name}>"

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "country": self.country,
            # "address": self.address,
            "phone_number": self.phone_number,
            "zip_code": self.zip_code,
            "favorites": [fav.serialize() for fav in self.favorites],
            "profile_image": self.profile_image
        }

class Favorite(db.Model):
    __tablename__ = "favorite"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)

    def __repr__(self):
        return f"<Favorite: User {self.user_id} >"
        # - Product {self.product_id}

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
        }
        
