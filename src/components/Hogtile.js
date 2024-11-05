import React, { useState } from "react";

function HogTile({ hog, hideHog }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="ui eight wide column">
      <div className="ui card">
        <div className="image">
          <img src={hog.image} alt={hog.name} />
        </div>
        <div className="content">
          <h3 className="header">{hog.name}</h3>
          <div className="meta">
            <span className="date">Specialty: {hog.specialty}</span>
          </div>
          <div className="description">
            {showDetails && (
              <>
                <p>Weight: {hog.weight}</p>
                <p>Greased: {hog.greased ? "Yes" : "No"}</p>
                <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
              </>
            )}
          </div>
        </div>
        <div className="extra content">
          <button className="ui button" onClick={toggleDetails}>
            {showDetails ? "Hide Details" : "Show Details"}
          </button>
          <button className="ui button red" onClick={() => hideHog(hog.name)}>
            Hide Hog
          </button>
        </div>
      </div>
    </div>
  );
}

export default HogTile;
