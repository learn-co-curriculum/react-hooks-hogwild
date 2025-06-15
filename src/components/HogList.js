import React, { useState } from "react";

function HogList({ hogs }) {
  const [clickedHog, setClickedHog] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [greased, setGreased] = useState(false);

  const handleClick = (hog) => {
    if (clickedHog === hog) {
      setClickedHog("");
    } else {
      setClickedHog(hog);
    }
  };

  const handleSort = (type) => {
    setSortBy(type);
  };

  const handleFilter = () => {
    setGreased(!greased);
  };

  const renderHogs = () => {
    let filteredHogs = greased ? hogs.filter(hog => hog.greased) : hogs;
    let sortedHogs = [...filteredHogs];
    
    if (sortBy === "name") {
      sortedHogs.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "weight") {
      sortedHogs.sort((a, b) => a.weight - b.weight);
    }

    return sortedHogs.map((hog) => (
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

  const sortButtons = (
    <div>
      <button onClick={() => handleSort("name")}>Sort by Name</button>
      <button onClick={() => handleSort("weight")}>Sort by Weight</button>
      <button onClick={handleFilter}>Show {greased ? "All" : "Greased"} Hogs</button>
    </div>
  );

  return (
    <div>
      {sortButtons}
      {renderHogs()}
    </div>
  );
}

export default HogList; 
