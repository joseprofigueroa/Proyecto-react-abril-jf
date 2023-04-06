import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "./components/SearchBar";
import PokemonList from "./components/PokemonList";
import ElementFilter from "./components/ElementFilter";
import { PokemonContext } from './components/PokemonContext';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedElement, setSelectedElement] = useState("");
  const { setPokemon } = useContext(PokemonContext);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
        setPokemonList(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPokemonList();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleElementFilter = (element) => {
    setSelectedElement(element);
  };

  return (
    <div className="app">
      <header className="app-header">
        <img
          className="app-header-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
          alt="Pokemon logo"
        />
        <SearchBar onSearch={handleSearch} />
        <ElementFilter onFilter={handleElementFilter} />
      </header>
      <main className="app-main">
        <PokemonList
          pokemonList={pokemonList}
          searchTerm={searchTerm}
          selectedElement={selectedElement}
          setPokemon={setPokemon}
        />
      </main>
    </div>
  );
}

export default App;
