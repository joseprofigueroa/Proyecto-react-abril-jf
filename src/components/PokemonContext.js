import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { useDebouncedCallback } from 'use-debounce';

export const PokemonContext = createContext();

const PokemonContextProvider = (props) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=150')
      .then((response) => {
        setLoading(false);
        setPokemonList(response.data.results);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  }, []);

  const filterByElement = (element) => {
    setLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/type/${element}`)
      .then((response) => {
        setLoading(false);
        setPokemonList(response.data.pokemon.map(p => p.pokemon));
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  };

  const [debouncedFilterByElement] = useDebouncedCallback(filterByElement, 500);

  const setPokemon = (pokemon) => {
    setLoading(false);
    setPokemonList([pokemon]);
  };

  return (
    <PokemonContext.Provider value={{ pokemonList, loading, error, debouncedFilterByElement, setPokemon }}>
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
