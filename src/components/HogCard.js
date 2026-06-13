import React, { useState } from "react";

function HogCard({ hog, onHide }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="ui five wide column">
      <div className="ui card" onClick={() => setShowDetails(!showDetails)}>
        <div className="image">
          <img src={hog.image} alt={hog.name} />
        </div>
        <div className="content">
          <div className="header">{hog.name}</div>
          {showDetails && (
            <div className="description">
              <p><strong>Specialty:</strong> {hog.specialty}</p>
              <p><strong>Weight:</strong> {hog.weight} lbs</p>
              <p><strong>Greased:</strong> {hog.greased ? "Yes 🐷" : "No"}</p>
              <p><strong>Highest Medal:</strong> {hog["highest medal achieved"]}</p>
            </div>
          )}
        </div>
        <div className="extra content">
          <button
            className="ui button red tiny"
            onClick={(e) => {
              e.stopPropagation();
              onHide(hog.name);
            }}
          >
            Hide
          </button>
        </div>
      </div>
    </div>
  );
}

export default HogCard;