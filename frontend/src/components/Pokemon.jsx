
/**
 * Pokémon component
 * @param {number} id 
 * @param {string} name 
 * @param {string} type1 
 * @param {string|null} type2 
 */
function Pokemon(id, name, type1, type2) {
    return (
        <div className="Pokemon">
            <dl>
                <dt>Name</dt>
                <dd>{name}</dd>

                <dt>Type 1</dt>
                <dd>{type1}</dd>

                <dt>Type 2</dt>
                {type2 ? <dd>{type2}</dd> : <dd>{aucun}</dd>}
            </dl>
        </div>
    );
}

export default Pokemon;
