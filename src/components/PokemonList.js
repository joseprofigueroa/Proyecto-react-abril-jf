import React, { useContext } from "react";
import { PokemonContext } from "../components/PokemonContext";

const PokemonList = () => {
  const { filteredPokemon } = useContext(PokemonContext);

  return (
    <div className="pokemon-list">
      <div className="grid-container">
        {filteredPokemon.map((pokemon) => (
          <div key={pokemon.id} className="pokemon-card">
            <div className="pokemon-img">
              <img src={pokemon.image} alt={pokemon.name} />
            </div>
            <div className="pokemon-details">
              <h3>{pokemon.name}</h3>
              <p className="pokemon-type">
                Type: {pokemon.types.join(", ")}
              </p>
              <p className="pokemon-weight">Weight: {pokemon.weight} kg</p>
              <p className="pokemon-height">Height: {pokemon.height} m</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
