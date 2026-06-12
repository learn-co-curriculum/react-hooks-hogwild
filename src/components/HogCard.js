import React, { useState } from "react";

function HogCard({ hog }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div onClick={() => setShowDetails(!showDetails)}>
      <h2>{hog.name}</h2>

      <img
        src={hog.image}
        alt={hog.name}
      />

      {showDetails && (
        <div>
          <p>Specialty: {hog.specialty}</p>
          <p>Weight: {hog.weight}</p>
          <p>Greased: {hog.greased ? "Yes" : "No"}</p>
          <p>Medal: {hog.highest_medal_achieved}</p>
        </div>
      )}
    </div>
  );
}

export default HogCard;