import { PropTypes } from "prop-types";

Definition.propTypes = {
  dictionary: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default function Definition({ dictionary }) {
  return (
    <section className="definition-section">
      {dictionary.meanings.map((meaning, index) => {
        return (
          <div key={index}>
            <div className="part-of-speech">
              <h3>{meaning.partOfSpeech}</h3>
            </div>
            <div className="meaning">
              <h4>Meaning</h4>
              <ul>
                {meaning.definitions.map((definition, index) => {
                  return <li key={index}>{definition.definition}</li>;
                })}
              </ul>
              <div className="synonyms">
                <h4>Synonyms</h4>
                {meaning.synonyms.length !== 0 ? (
                  <ul>
                    {meaning.synonyms.map((synonym, index) => {
                      return (
                        <li className="synonym" key={index}>
                          {synonym}
                          {meaning.synonyms.length - 1 !== index && ", "}
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <p>No synonyms found</p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
