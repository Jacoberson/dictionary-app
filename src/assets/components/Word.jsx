import PropTypes from "prop-types";
import PlayIcon from "../images/icon-play.svg";

Word.propTypes = {
  dictionary: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default function Word({ dictionary }) {
  const playSound = sound => {
    new Audio(sound).play();
  };

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
                ? dictionary.phonetics.find(key => key.text).text
                : dictionary.phonetic && dictionary.phonetic}
            </p>
          </div>
          <img
            className="play-button"
            src={PlayIcon}
            alt="play button"
            onClick={() =>
              playSound(dictionary.phonetics.find(key => key.audio).audio)
            }
          />
        </>
      ) : (
        "No word found"
      )}
    </section>
  );
}
