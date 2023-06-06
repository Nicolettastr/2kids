"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Favorite, Products
from api.forms import LogInUserForm, UserForm, ProductForm
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity, set_access_cookies, verify_jwt_in_request
from sqlalchemy.exc import IntegrityError, NoForeignKeysError
import sys



api = Blueprint('api', __name__)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

#Create User

@api.route("/signup", methods=["POST"])
def create_user():
    # ! dangerous to disable the csrf protection
    form = UserForm(meta={"csrf": False})
    # csrf_token = form.csrf_token.data
    # print('CSRF token: {}'.format(csrf_token))
    if form.validate_on_submit():
        try:
            user_data = {field: getattr(
                form, field).data for field in form._fields}
            print(user_data)
            user = User(**user_data)
            db.session.add(user)
            db.session.commit()

            # ? what are we doing with this token?
            access_token = create_access_token(identity=form.email.data)
            user_dict = user.serialize()
            user_dict["access_token"] = access_token

            response = jsonify(user_dict)
            response.headers["Access-Control-Allow-Credentials"] = "true"
            response.headers["Access-Control-Allow-Origin"] = "*"
            set_access_cookies(response, access_token)
            return response, 200
        except IntegrityError as e:
            db.session.rollback()
            return jsonify({"error": "email already exists"}), 400
        except Exception as e:
            db.session.rollback()
            print(sys.exc_info())
            return jsonify({"error": str(e)}), 500
        finally:
            db.session.close()
    else:
        errors = {field: errors[0] for field, errors in form.errors.items()}
        return jsonify({"error": "validation error", "errors": errors}), 400

# READ: all users -------------

@api.route("/users", methods=["GET"])
def get_users():
    try:
        users = User.query.all()
        print(users)
        users_list = [u.serialize() for u in users]
        response_body = {
            "msg": "Hey there, this is your GET /users response :)",
            "users": users_list
        }
        return jsonify(response_body), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


# READ: one user -------------

@api.route("/user/<int:user_id>", methods=["GET"])
def get_user(user_id):
    try:
        if not user_id:
            return jsonify({"error": "Bad Request: user_id is required"}), 400
        user = User.query.filter_by(id=user_id).first()
        if user:
            return jsonify(user.serialize()), 200
        else:
            return jsonify({"error": "User not found"}), 404
    except Exception as e:
        print(sys.exc_info())
        return jsonify({"error": str(e)}), 500

# UPDATE: user info ------------

@api.route("/user/<int:user_id>/update", methods=["PUT"])
def update_user(user_id):
    # ? it is creating a "session" cookie, seen in the response
    # this cookie is in the session storage, we need to know exactly where and when it is being created.

    updated_user = request.get_json()  # see signup for form validation
    user = User.query.filter_by(id=user_id).one_or_none()
    # TODO add a validation to check if the user is changing the email address, and if he is, raise an error if another user has it.
    if not user:
        return jsonify({"error": "no user with this id"}), 404
    form = UserForm(obj=updated_user, meta={"csrf": False})

    if form.validate_on_submit():
        for field, value in updated_user.items():
            setattr(user, field, value)
        try:
            db.session.commit()
        except Exception as e:
            db.session.rollback()
            print(sys.exc_info())
            return jsonify({"error": str(e)}), 500
        finally:
            db.session.close()

        updated_user = User.query.filter_by(id=user_id).first()
        return jsonify({"updated user": updated_user.serialize()}), 200
    else:
        errors = {field: errors[0] for field, errors in form.errors.items()}
        return jsonify({"error": "validation error", "errors": errors}), 400

# DELETE: user account ---------

@api.route("/user/<int:user_id>/delete", methods=["DELETE"])
def delete_user(user_id):

    try:
        user = User.query.filter_by(id=user_id).first()
        if not user:
            return jsonify({"error": "no user with this id"}), 404
        email = user.email
        db.session.delete(user)
        db.session.commit()
        return jsonify({"msg": f"User {email} deleted successfully"}), 200
    except Exception as e:
        db.session.rollback()
        print(sys.exc_info())
        return jsonify({"error": str(e)}), 500
    finally:
        db.session.close()

# Login 

@api.route("/login", methods=["POST"])
def handle_login():
    form = LogInUserForm(meta={"csrf": False})
    if form.validate_on_submit():
        try:
            email = form.email.data
            password = form.password.data
            user = User.query.filter_by(email=email).one_or_none()
            print(password, user.password)
            if not user:
                raise Exception("No user with this email")
            elif user.password != password:
                raise Exception("Wrong password")

            access_token = create_access_token(identity=email)
            response = jsonify({
                "msg": "login successful",
                "access_token": access_token,
                "user": user.serialize()
            })
            response.headers["Access-Control-Allow-Credentials"] = "true"
            set_access_cookies(response, access_token)
            return response, 200
        except Exception as e:
            return jsonify({"error": str(e)}), 401
    else:
        errors = {field: errors[0] for field, errors in form.errors.items()}
        return jsonify({"error": "validation error", "errors": errors}), 400

# Get User ID ------------

@api.route("/user/account", methods=["GET"])
@jwt_required()
def access_account():
    current_user_email = get_jwt_identity()
    user = User.query.filter_by(email=current_user_email).first()
    return jsonify(logged_in_as=user.serialize()), 200

# Logout -----------------

@api.route("/logout")
def logout():
    return "You log out"

# create product

@api.route("/product/create", methods=["POST"])
def create_product():
    
    form = ProductForm(meta={"csrf": False})
    if form.validate_on_submit():
        try:
            product_data = {field: getattr(
                form, field).data for field in form._fields}
            product = Products(**product_data)
            db.session.add(product)
            db.session.commit()

            print(product)

            product_dict = product.serialize()
            response = jsonify(product_dict)
            response.headers["Access-Control-Allow-Credentials"] = "true"
            response.headers["Access-Control-Allow-Origin"] = "*"
            return response, 200
        except IntegrityError as e:
            db.session.rollback()
            return jsonify({"error": "database information check failed", "ms": str(e)}), 400
        except Exception as e:
            db.session.rollback()
            print(sys.exc_info())
            return jsonify({"error": str(e)}), 500
        finally:
            db.session.close()
    else:
        errors = {field: errors[0] for field, errors in form.errors.items()}
        return jsonify({"error": "validation error", "errors": errors}), 400
