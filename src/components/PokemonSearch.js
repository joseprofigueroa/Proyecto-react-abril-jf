import React, { useContext } from 'react';
import { PokemonContext } from '../App';

function PokemonSearch() {
  const { setSearchTerm } = useContext(PokemonContext);
  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }
  
  return (
    <div>
      <input type="text" placeholder="Search Pokemon..." onChange={handleSearch} />
    </div>
  );
}

export default PokemonSearch;
