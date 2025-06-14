import React, { useState } from "react";

function HogList({ hogs }) {
  const [clickedHog, setClickedHog] = useState("");

  const handleClick = (hog) => {
    if (clickedHog === hog) {
      setClickedHog("");
    } else {
      setClickedHog(hog);
    }
  };

  const renderHogs = () => {
    return hogs.map((hog) => (
      <div onClick={() => handleClick(hog)}>
        <h2>{hog.name}</h2>
        <img src={hog.image} alt={hog.name} />
        {clickedHog === hog && 
        <div>
          <p>Specialty: {hog.specialty}</p>
          <p>Weight: {hog.weight}</p>
          <p>Greased: {hog.greased ? "Yes" : "No"}</p>
          <p>Highest Medal: Achieved {hog["highest medal achieved"]}</p>
        </div>
        }
      </div>
    ));
  };

  return (
    <div>
      {renderHogs()}
    </div>
  );
}

export default HogList; 
