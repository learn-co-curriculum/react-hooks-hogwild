import React, { useState } from "react";
import Nav from "./Nav";
import HogCard from "./HogCard";

import hogs from "../porkers_data";

function App() {
  const [showGreasedOnly, setShowGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("none");

  const filteredHogs = hogs.filter((hog) => {
    if (showGreasedOnly) {
      return hog.greased;
    }

    return true;
  });

  const sortedHogs = [...filteredHogs];

  if (sortBy === "name") {
    sortedHogs.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortBy === "weight") {
    sortedHogs.sort((a, b) => a.weight - b.weight);
  }

  const hogCards = sortedHogs.map((hog) => {
    return <HogCard key={hog.name} hog={hog} />;
  });

  return (
    <div className="App">
      <Nav
        showGreasedOnly={showGreasedOnly}
        setShowGreasedOnly={setShowGreasedOnly}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <div className="ui grid container">{hogCards}</div>
    </div>
  );
}

export default App;