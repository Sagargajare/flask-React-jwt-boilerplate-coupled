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
    DATABASE_URL = 'sqlite:///data.db'

    engine = create_engine(DATABASE_URL, convert_unicode=True)

    db_session = scoped_session(sessionmaker(autocommit=False,
                                             autoflush=False,
                                             bind=engine))
    Base = declarative_base()
    Base.query = db_session.query_property()

    def init_db():
        import jwtauthtest.models
        Base.metadata.create_all(bind=engine)

    def shutdown_db_session():
        db_session.remove()
    DEBUG = True
    TESTING = True
