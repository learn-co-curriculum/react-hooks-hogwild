

import React, { useState } from 'react';

function HogTile({ hog, hideHog }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="ui card" onClick={() => setShowDetails(!showDetails)}>
      <div className="image">
        <img src={hog.image} alt={hog.name} />
      </div>
      <div className="content">
        <h3>{hog.name}</h3>
        <button onClick={(e) => { e.stopPropagation(); hideHog(hog.name); }}>Hide Hog</button>
        {showDetails && (
          <div className="extra content">
            <p>Specialty: {hog.specialty}</p>
            <p>Weight: {hog.weight}</p>
            <p>Greased: {hog.greased ? "Yes" : "No"}</p>
            <p>Highest Medal Achieved: {hog['highest medal achieved']}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default HogTile;
