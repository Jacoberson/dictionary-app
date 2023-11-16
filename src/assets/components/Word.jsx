import { useEffect } from "react";
import { PropTypes } from "prop-types";
import PlayIcon from "../images/icon-play.svg";

Word.propTypes = {
  searchedWord: PropTypes.string,
};

export default function Word({ searchedWord }) {
  useEffect(() => {
    searchApi(searchedWord);
  }, [searchedWord]);

  const searchApi = async word => {
    if (word) {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );

      const returnedWord = await response.json();

      console.log(returnedWord);
    }
  };

  return (
    <section className="word-section">
      <div className="word-info">
        <h2 className="word">keyboard</h2>
        <p className="pronunciation">/ˈkiːbɔːd/</p>
      </div>
      <img className="play-button" src={PlayIcon} alt="play button" />
    </section>
  );
}
