
from backend.auth import auth_blueprint
from backend.frontend.views import frontend_blueprint
from flask import Flask
from os import environ


from passlib.hash import pbkdf2_sha256
app = Flask(__name__,
            static_folder='./public',
            template_folder="./static")
app.config['SECRET_KEY'] = environ.get('JWT_SECRET_KEY')


# register the blueprints
app.register_blueprint(frontend_blueprint)
app.register_blueprint(auth_blueprint)
import backend.auth.jwt