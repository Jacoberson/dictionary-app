import { useState } from "react";
import PropTypes from "prop-types";
import PlayIcon from "../images/icon-play.svg";
import PlayIconHover from "../images/icon-play-hover.svg";
import noPronunciation from "../audio/no-pronunciation.mp3";

Word.propTypes = {
  dictionary: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default function Word({ dictionary }) {
  const [isShown, setIsShown] = useState(false);

  const playSound = sound => {
    if (sound) {
      new Audio(sound).play();
    } else {
      new Audio(noPronunciation).play();
    }
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
                ? dictionary.phonetics[0].text
                : dictionary.phonetic && dictionary.phonetic}
            </p>
          </div>
          <img
            className="play-button"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            src={isShown ? PlayIconHover : PlayIcon}
            alt="play button"
            onClick={() =>
              playSound(dictionary.phonetics.find(key => key.audio) || null)
            }
          />
        </>
      ) : (
        <div className="no-definitions-found">
          <p className="emoji">&#128577;</p>
          <h3>No Definitions Found</h3>
          <p>
            Sorry pal, we couldn&apos;t find definitions for the word you were
            looking for. You can try the search again at a later time or head to
            the web instead.
          </p>
        </div>
      )}
    </section>
  );
}
