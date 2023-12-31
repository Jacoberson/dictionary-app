import { useState, useEffect } from "react";
import Header from "./assets/components/Header";
import Search from "./assets/components/Search";
import Word from "./assets/components/Word";
import Definition from "./assets/components/Definition";
import Source from "./assets/components/Source";
import { getWordInformation } from "./services/dictionary";
import "./App.css";

function App() {
  const [searchedWord, setSearchedWord] = useState("");
  const [dictionary, setDictionary] = useState([]);

  useEffect(() => {
    let mounted = true;
    getWordInformation(searchedWord).then(wordInformation => {
      if (mounted) {
        setDictionary(wordInformation[0]);
      }
    });
    return () => (mounted = false);
  }, [searchedWord]);

  return (
    <div id="App" className="font-inter">
      <Header />
      <Search setSearchedWord={setSearchedWord} />
      <Word dictionary={dictionary} />
      {dictionary && dictionary.length !== 0 && (
        <>
          <Definition dictionary={dictionary} />
          <Source dictionary={dictionary} />
        </>
      )}
    </div>
  );
}

export default App;
