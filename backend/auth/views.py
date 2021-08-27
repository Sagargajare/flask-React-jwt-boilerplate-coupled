from backend.auth import auth_blueprint
from flask_jwt_extended import jwt_required
from flask import request
from flask import jsonify
from flask_jwt_extended import create_access_token
from flask_jwt_extended import current_user
from backend.auth.models import User, TokenBlocklist
from passlib.hash import pbkdf2_sha256
from datetime import datetime
from datetime import timedelta
from datetime import timezone
from backend.database import db_session
from flask_jwt_extended import get_jwt


@auth_blueprint.route("/auth/login", methods=["POST"])
def login():
    username = request.json.get("username", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(username=username).one_or_none()
    if not user or not pbkdf2_sha256.verify(password, user.password):
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=user)
    return jsonify({'access_token': access_token}), 201


@auth_blueprint.route("/auth/logout", methods=["DELETE"])
@jwt_required()
def modify_token():
    jti = get_jwt()["jti"]
    now = datetime.now(timezone.utc)
    db_session.add(TokenBlocklist(jti=jti, created_at=now))
    db_session.commit()
    return jsonify(msg="JWT revoked")


@auth_blueprint.route("/auth/me", methods=["GET"])
@jwt_required()
def protected():
    return jsonify(
        id=current_user.id,
        username=current_user.username,
    )
