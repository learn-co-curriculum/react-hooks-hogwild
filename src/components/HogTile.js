import React, { useState } from 'react';

const HogTile = ({ hog, hideHog }) => {
  const [visible, setVisible] = useState(false);

  const handleToggleDetails = () => {
    setVisible(!visible);
  };

  return (
    <div className="ui eight wide column">
      <div className="ui card" onClick={handleToggleDetails}>
        <div className="image">
          <img src={hog.image} alt={hog.name} />
        </div>
        <div className="content">
          <h3>{hog.name}</h3>
          {visible && (
            <div>
              <p>Specialty: {hog.specialty}</p>
              <p>Weight: {hog.weight}</p>
              <p>Greased: {hog.greased ? 'Yes' : 'No'}</p>
              <p>Highest Medal: {hog.highestMedal}</p>
              <button onClick={() => hideHog(hog.name)}>Hide Hog</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HogTile;