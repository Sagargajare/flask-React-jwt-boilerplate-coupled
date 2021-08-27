

from backend.auth.models import User, TokenBlocklist
from backend.database import db_session
from flask_jwt_extended import JWTManager
from .models import User
from backend import app
app.config["JWT_SECRET_KEY"] = "bgdyusgfDgdf.sifsgsgdg6fshr.tsrauege6rajfnHf5gt6g878e18dg12s@hu67rrmgr"
jwt = JWTManager(app)


@jwt.user_identity_loader
def user_identity_lookup(user):
    return user.id


@jwt.user_lookup_loader
def user_lookup_callback(_jwt_header, jwt_data):
    identity = jwt_data["sub"]
    return User.query.filter_by(id=identity).one_or_none()


@jwt.token_in_blocklist_loader
def check_if_token_revoked(jwt_header, jwt_payload):
    jti = jwt_payload["jti"]
    token = db_session.query(TokenBlocklist.id).filter_by(jti=jti).scalar()
    return token is not None
