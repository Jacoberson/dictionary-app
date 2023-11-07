import NewWindowIcon from "../images/icon-new-window.svg";

export default function Definition() {
  return (
    <section>
      <div className="part-of-speech">
        <h3>noun</h3>
        <hr></hr>
      </div>
      <div className="meaning">
        <h4>Meaning</h4>
        <ul>
          <li>
            (etc.) A set of keys used to operate a typewriter, computer, etc.
          </li>
          <li>
            A component of many instruments including the piano, organ, and
            harpsichord consiting of usually black and white keys that cause
            different tones to be produced when struck.
          </li>
          <li>
            A device with keys of a musical keyboard, used to control electronic
            sound-producing devices which may be built into or separate from the
            keyboard
          </li>
        </ul>
        <div className="synonyms">
          <h4>Synonyms</h4>
          <p>electronic keyboard</p>
        </div>
        <div className="source">
          <h4>Source</h4>
          <p>https://en.wiktionary.org/wiki/keyboard</p>
          <img src={NewWindowIcon} alt="new window icon" />
        </div>
      </div>
    </section>
  );
}
