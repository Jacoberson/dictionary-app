import { PropTypes } from "prop-types";

Source.propTypes = {
  dictionary: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default function Source({ dictionary }) {
  return (
    <section className="source-section">
      <div className="source">
        <h4>Source</h4>
        <p>
          <a
            href={dictionary.sourceUrls}
            target="_blank"
            rel="noreferrer noopener">
            {dictionary.sourceUrls}
          </a>
        </p>
      </div>
    </section>
  );
}
