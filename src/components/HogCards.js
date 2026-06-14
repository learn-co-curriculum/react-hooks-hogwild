import React, { useState } from "react";

function HogCards({ hog }) {
  const [showDetails, setShowDetails] = useState(false);

  function handleDetails() {
    setShowDetails(!showDetails);
  }

  const tileSizeClass = showDetails ? "maxPigTile" : "minPigTile";

  return (
    <article className={`pigTile ${tileSizeClass}`}>
      <header>
        <h3
          onClick={handleDetails}
          style={{ cursor: "pointer" }}
          role="button"
          aria-expanded={showDetails}
        >
          Title: {hog.name}
        </h3>
      </header>

      <img
        src={hog.image}
        alt={`A photograph of ${hog.name} the hog`}
        style={{ width: "100%", height: "65%", objectFit: "cover" }}
      />

      {showDetails && (
        <section className="normalText" aria-label="Hog Specifications">
          <ul>
            <li>
              <strong>Specialty:</strong> {hog.specialty}
            </li>
            <li>
              <strong>Greased:</strong> {hog.greased ? "Yes" : "No"}
            </li>
            <li>
              <strong>Weight:</strong> {hog.weight} lbs
            </li>
            <li className="achievementText">
              <strong>Highest Medal:</strong> {hog["highest medal achieved"]}
            </li>
          </ul>
        </section>
      )}
    </article>
  );
}

export default HogCards;
