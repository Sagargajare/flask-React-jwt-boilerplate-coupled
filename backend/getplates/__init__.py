

from flask import Flask, Blueprint

getplates_blueprint = Blueprint('getplates', __name__)



import backend.getplates.views
