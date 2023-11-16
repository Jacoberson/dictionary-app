import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import PlayIcon from "../images/icon-play.svg";
import { getWordInformation } from "../../services/dictionary";

Word.propTypes = {
  searchedWord: PropTypes.string,
};

export default function Word({ searchedWord }) {
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
    <section className="word-section">
      {dictionary && dictionary.length !== 0 ? (
        <>
          <div className="word-info">
            <h2 className="word">
              {dictionary ? dictionary.word : "Word not found"}
            </h2>
            <p className="pronunciation">
              {dictionary.phonetics.length !== 0
                ? dictionary.phonetics[0].text
                : dictionary.phonetic && dictionary.phonetic}
            </p>
          </div>
          <img className="play-button" src={PlayIcon} alt="play button" />
        </>
      ) : (
        "No word found"
      )}
    </section>
  );
}
