import PlayIcon from "../images/icon-play.svg";

export default function Word() {
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
