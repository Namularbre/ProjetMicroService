import React, { useState } from 'react';
import PokemonService from '../services/pokemonService';

function AddPokemonForm() {
  const [formData, setFormData] = useState({
    name: '',
    type1: '',
    type2: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour soumettre le formulaire
    console.log('Form submitted:', formData);

    const { name, type1, type2 } = formData;

    const success = await PokemonService.postNewPokemon(name, type1, type2 ? type2 : null);

    if (success) {
      alert('Pokémon ajouté avec succès!');
      // Réinitialiser le formulaire après soumission réussie
      setFormData({
        name: '',
        type1: '',
        type2: '',
      });
    } else {
      alert('Erreur lors de l\'ajout du Pokémon.');
    }
  };

  return (
    <div className='border p-3'>
      <h5>Add a pokemon</h5>
      <form onSubmit={handleSubmit} className='form'>
        <div className='form-group'>
          <label htmlFor="name" className='form-label'>Nom:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label htmlFor="type1" className='form-label'>Type 1:</label>
          <input
            type="text"
            id="type1"
            name="type1"
            value={formData.type1}
            onChange={handleChange}
            required
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label htmlFor="type2" className='form-label'>Type 2:</label>
          <input
            type="text"
            id="type2"
            name="type2"
            value={formData.type2}
            onChange={handleChange}
            className='form-control'
          />
        </div>
        <button type="submit" className='btn btn-primary mt-3'>Ajouter Pokémon</button>
      </form>
    </div>
  );
}

export default AddPokemonForm;
