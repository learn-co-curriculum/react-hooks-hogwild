import React, { useState } from "react";

function HogTile({ hog, onHideHog }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="ui four wide column">
      <div className="ui card" onClick={() => setShowDetails(!showDetails)}>
        <div className="image">
          <img src={hog.image} alt={hog.name} style={{ height: "150px", objectFit: "cover" }} />
        </div>
        <div className="content">
          <span className="header">{hog.name}</span>
          
          {showDetails && (
            <div className="description">
              <p><strong>Specialty:</strong> {hog.specialty}</p>
              <p><strong>Weight:</strong> {hog.weight} lbs</p>
              <p><strong>Greased:</strong> {hog.greased ? "Yes" : "No"}</p>
              <p className="meta"><strong>Highest Medal:</strong> {hog["highest medal achieved"]}</p>
            </div>
          )}
        </div>
        <div className="extra content">
          <button 
            className="ui mini button red" 
            onClick={(e) => {
              e.stopPropagation(); 
              onHideHog(hog.name);
            }}
          >
            Hide Pig
          </button>
        </div>
      </div>
    </div>
  );
}

export default HogTile;
