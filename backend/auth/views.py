from backend.auth import auth_blueprint
from flask_jwt_extended import jwt_required
from flask import request
from flask import jsonify
from flask_jwt_extended import create_access_token
from flask_jwt_extended import current_user
from backend.auth.models import User
from passlib.hash import pbkdf2_sha256


@auth_blueprint.route("/auth/login", methods=["POST"])
def login():
    username = request.json.get("username", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(username=username).one_or_none()
    if not user or not pbkdf2_sha256.verify(password, user.password):
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=user)
    return jsonify({'access_token': access_token}), 201


@auth_blueprint.route("/auth/me", methods=["GET"])
@jwt_required()
def protected():
    return jsonify(
        id=current_user.id,
        username=current_user.username,
    )
