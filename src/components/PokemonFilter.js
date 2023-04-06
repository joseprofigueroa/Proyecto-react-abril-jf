import React, { useContext } from 'react';
import { PokemonContext } from '../App';

function PokemonFilter() {
  const { setFilterType } = useContext(PokemonContext);
  
  const handleFilter = (event) => {
    setFilterType(event.target.value);
  }
  
  return (
    <div>
      <select onChange={handleFilter}>
        <option value="">All</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="grass">Grass</option>
        <option value="electric">Electric</option>
        <option value="normal">Normal</option>
        <option value="fighting">Fighting</option>
        <option value="flying">Flying</option>
        <option value="poison">Poison</option>
        <option value="ground">Ground</option>
        <option value="rock">Rock</option>
        <option value="bug">Bug</option>
        <option value="ghost">Ghost</option>
        <option value="steel">Steel</option>
        <option value="psychic">Psychic</option>
        <option value="ice">Ice</option>
        <option value="dragon">Dragon</option>
        <option value="dark">Dark</option>
        <option value="fairy">Fairy</option>
      </select>
    </div>
  );
}

export default PokemonFilter;
