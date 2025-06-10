class PokemonService {
    static _TRAEFIK_URL = `${window.REACT_APP_API_URL}/pokeapi` || 'http://localhost:8080/pokeapi';

    static async getAll() {
        try {
            const response = await fetch(PokemonService._TRAEFIK_URL);

            if (!response.ok) {
                throw new Error(`API response is not ok: ${response.status}: ${await response.json()}`);
            }

            const pokemons = await response.json();
            console.log(pokemons);

            return pokemons;
        } catch (e) {
            console.error(e.message);
            return [];
        }
    }

    /**
     * 
     * @param {string} name 
     * @param {string} type1 
     * @param {string|null} type2 
     */
    static async postNewPokemon(name, type1, type2) {
        try {
            const pokemon = {
                name,
                type1,
                type2,
            };

            const jsonPokemon = JSON.stringify(pokemon);

            const response = await fetch(PokemonService._TRAEFIK_URL, {
                method: 'POST',
                body: jsonPokemon,
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`Adding a pokemon caused an error: ${response.status}, ${await response.json()}`);
            }

            return true;
        } catch (e) {
            console.error(e.message);
            return false;
        }
    }
}

export default PokemonService;
