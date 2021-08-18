
from backend.database import Base
from sqlalchemy import Column, Integer, String
from hmac import compare_digest


class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    username = Column(String(50), nullable=False, unique=True)
    password = Column(String(200), nullable=False)

    def __init__(self, username, password):
        self.username = username
        self.password = password

    def check_password(self, password):
        return compare_digest(password, "password")

    def __repr__(self):
        return f'<User {{ username: {self.username}, \
password: {self.password} }}'
