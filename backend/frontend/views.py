from flask import render_template, Blueprint
frontend_blueprint = Blueprint('frontend', __name__)


@frontend_blueprint.route('/')
def index():
    return render_template("index.html")
