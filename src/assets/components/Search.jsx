import { useState } from "react";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <section className="search-section">
      <input
        className="search"
        type="search"
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
      />
    </section>
  );
}
