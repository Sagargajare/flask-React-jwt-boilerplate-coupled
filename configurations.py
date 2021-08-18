from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import scoped_session, sessionmaker


class BaseCongig(object):
    '''
    Base config class
    '''
    DEBUG = True
    TESTING = False


class ProductionConfig(BaseCongig):
    """
    Production specific config
    """
    DEBUG = False


class DevelopmentConfig(BaseCongig):
    """
    Development environment specific configuration
    """

    DEBUG = True
    TESTING = True
