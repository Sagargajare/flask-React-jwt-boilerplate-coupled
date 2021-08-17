from backend.auth.views import auth_blueprint
from backend.frontend.views import frontend_blueprint
from flask import Flask
app = Flask(__name__,
            static_folder='./public',
            template_folder="./static")

# register the blueprints
app.register_blueprint(frontend_blueprint)
app.register_blueprint(auth_blueprint)
