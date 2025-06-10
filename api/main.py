from fastapi import FastAPI
from fastapi.params import Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional

from sqlalchemy.orm import Session

from dbconnection import get_db, Pokemon

# The application
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],  # Autorise toutes les méthodes
    allow_headers=["*"],  # Autorise tous les en-têtes
)

class AddPokemon(BaseModel):
    """
    Pokémon viewModel for creation
    """
    name: str
    type1: str
    type2: Optional[str]

@app.get('/')
def root(db: Session = Depends(get_db)):
    """
    Get all Pokémon in database
    :param db: The postgres session
    :return:
    """
    return db.query(Pokemon).all()


@app.post('/')
def add_pokemon(pokemon: AddPokemon, db: Session = Depends(get_db)):
    """
    Add a new Pokémon in the database
    :param pokemon: the Pokémon you want to create
    :param db: The postgres session
    :return: The Pokémon created in the database
    """
    db_pokemon = Pokemon(name=pokemon.name, type1=pokemon.type1, type2=pokemon.type2)
    db.add(db_pokemon)
    db.commit()
    db.refresh(db_pokemon)
    return db_pokemon
