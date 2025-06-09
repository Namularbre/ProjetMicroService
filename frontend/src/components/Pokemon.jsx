import React, { useState } from 'react';

/**
 * Pokémon component
 * @param {number} id 
 * @param {string} name 
 * @param {string} type1 
 * @param {string|null} type2 
 */
function Pokemon({id, name, type1, type2}) {
    return (
        <tr className="Pokemon">
            <th scope='row'>{id}</th>
            <td>{name}</td>
            <td>{type1}</td>
            <td>{type2}</td>
        </tr>
    );
}

export default Pokemon;
