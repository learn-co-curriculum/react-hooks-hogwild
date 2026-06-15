import React, { useState } from "react";

function HogCard({ hog }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className="ui four wide column"
      onClick={() => setShowDetails(!showDetails)}
    >
      <div className="ui card">
        <div className="image">
          <img src={hog.image} alt={hog.name} />
        </div>

        <div className="content">
          <h2 className="header">{hog.name}</h2>

          {showDetails && (
            <div className="description">
              <p>Specialty: {hog.specialty}</p>
              <p>Weight: {hog.weight}</p>
              <p>Greased: {hog.greased ? "Yes" : "No"}</p>
              <p>Medal: {hog.highest_medal_achieved}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HogCard;