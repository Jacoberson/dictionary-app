import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";

Search.propTypes = {
  setSearchedWord: PropTypes.func,
};

export default function Search({ setSearchedWord }) {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setSearchedWord(searchValue);
  }, [searchValue, setSearchedWord]);

  const handleSearch = event => {
    setSearchValue(event);
  };

  return (
    <section className="search-section">
      <input
        className="search"
        type="search"
        value={searchValue}
        onChange={event => handleSearch(event.target.value)}
      />
    </section>
  );
}
