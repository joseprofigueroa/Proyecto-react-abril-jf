import React, { useContext } from "react";
import { PokemonContext } from "../components/PokemonContext";

const ElementFilter = () => {
  const { filterByElement } = useContext(PokemonContext);

  const handleFilterChange = (e) => {
    filterByElement(e.target.value);
  };

  return (
    <div>
      <h3>Filter by Element:</h3>
      <select onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="electric">Electric</option>
        <option value="grass">Grass</option>
        <option value="ice">Ice</option>
        <option value="fighting">Fighting</option>
        <option value="poison">Poison</option>
        <option value="ground">Ground</option>
        <option value="flying">Flying</option>
        <option value="psychic">Psychic</option>
        <option value="bug">Bug</option>
        <option value="rock">Rock</option>
        <option value="ghost">Ghost</option>
        <option value="dragon">Dragon</option>
        <option value="dark">Dark</option>
        <option value="steel">Steel</option>
        <option value="fairy">Fairy</option>
      </select>
    </div>
  );
};

export default ElementFilter;
