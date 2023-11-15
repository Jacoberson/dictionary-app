import { useState, useEffect } from "react";
import Header from "./assets/components/Header";
import Search from "./assets/components/Search";
import Word from "./assets/components/Word";
import Definition from "./assets/components/Definition";
import "./App.css";

function App() {
  const [searchedWord, setSearchedWord] = useState("");

  return (
    <div id="App" className="font-inter">
      <Header />
      <Search setSearchedWord={setSearchedWord} />
      <Word searchedWord={searchedWord} />
      <Definition />
    </div>
  );
}

export default App;
