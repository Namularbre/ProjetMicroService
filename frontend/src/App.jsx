import { useState } from 'react'
import './App.css'
import AddPokemonForm from './components/AddPokemonForm';
import Pokemon from './components/Pokemon';
import { useEffect } from 'react';
import PokemonService from './services/pokemonService';
import 'bootstrap/dist/css/bootstrap.css';

/**
 * The application component
 * Show the pokemons in the api and the form to add one
 */
function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const data = await PokemonService.getAll();
        setPokemons(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  if (loading) {
    return <div>Chargement en cours...</div>;
  }

  if (error) {
    return <div>Erreur: {error}</div>;
  }

  return (
    <div className='App container'>
      <h1>Pokeapp</h1>
      <AddPokemonForm></AddPokemonForm>
      <div>
      <h1>Liste des Pokémon</h1>
      {pokemons.length === 0 ? (
        <p>Aucun Pokémon trouvé.</p>
      ) : (
        <table className='table table-striped table-hover'>
          <caption>
            Liste des pokémons
          </caption>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Name</th>
              <th scope='col'>Type I</th>
              <th scope='col'>Type II</th>
            </tr>
          </thead>
          <tbody>
            {pokemons.map((pokemon, index) => (
                <Pokemon id={pokemon.id} name={pokemon.name} type1={pokemon.type1} type2={pokemon.type2}></Pokemon>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </div>
  )
}

export default App
