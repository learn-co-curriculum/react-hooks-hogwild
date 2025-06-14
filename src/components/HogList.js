import React from "react";

function HogList({ hogs }) {
  return (
    <div>
      {hogs.map((hog) => (
        <div>
          <h2>{hog.name}</h2>
          <img src={hog.image} alt={hog.name} />
        </div>
      ))}
    </div>
  );
}

export default HogList; 
