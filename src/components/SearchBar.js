import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.onSearch(searchTerm);
  };

  return (
    <form className="search-bar" onSubmit={handleFormSubmit}>
      <input
        className="search-bar-input"
        type="text"
        placeholder="Search for a Pokemon"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className="search-bar-button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
