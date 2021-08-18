

from flask import Flask, Blueprint
from backend.database import init_db, shutdown_db_session
auth_blueprint = Blueprint('auth', __name__)


init_db()
import backend.auth.views
