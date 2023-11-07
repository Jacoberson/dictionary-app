import SearchIcon from "../images/icon-search.svg";

export default function Search() {
  return (
    <section className="search-section">
      <input type="search" />
      <img src={SearchIcon} alt="" />
    </section>
  );
}
