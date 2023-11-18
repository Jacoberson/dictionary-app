import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";

Search.propTypes = {
  setSearchedWord: PropTypes.func,
};

export default function Search({ setSearchedWord }) {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const search = setTimeout(() => {
      setSearchedWord(searchValue);
    }, 500);
    return () => clearTimeout(search);
  }, [searchValue, setSearchedWord]);

  const handleSearch = event => {
    setSearchValue(event);
  };

  return (
    <section className="search-section">
      <input
        className="search"
        type="search"
        placeholder="Search for any word..."
        value={searchValue}
        onChange={event => handleSearch(event.target.value)}
        required
      />
      <span className="error">
        {!searchValue && "Woops, can't be empty..."}
      </span>
    </section>
  );
}
