import os

from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# URL of the database
SQL_ALCHEMY_URL = os.getenv('DATABASE_URL')

engine = create_engine(SQL_ALCHEMY_URL)

SessionLocal = sessionmaker(autoflush=False, autocommit=False, bind=engine)

Base = declarative_base()

class Pokemon(Base):
    """
    Pokémon entity
    """
    __tablename__ = "pokemons"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String, index=True)
    type1 = Column(String)
    type2 = Column(String, nullable=True)

Base.metadata.create_all(bind=engine)

def get_db():
    """
    Get the database connexion
    :return: the connexion
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
