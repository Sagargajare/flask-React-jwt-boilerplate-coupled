from flask import render_template, Blueprint
auth_blueprint = Blueprint('auth', __name__)


@auth_blueprint.route('/login')
def index():
    return 'hello world'
