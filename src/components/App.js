import React, { useState } from "react";
import Nav from "./Nav";
import FilterSortBar from "./FilterSortBar";
import HogTile from "./HogTile";
import HogForm from "./HogForm";
import initialHogs from "../porkers_data";

function App() {
  const [hogs, setHogs] = useState(initialHogs);
  const [showGreasedOnly, setShowGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("none");
  const [hiddenHogNames, setHiddenHogNames] = useState([]);

  // Callback to hide hogs
  function handleHideHog(name) {
    setHiddenHogNames([...hiddenHogNames, name]);
  }

  // Callback to add new hogs
  function handleAddHog(newHog) {
    setHogs([...hogs, newHog]);
  }

  // 1. Filter out hidden hogs first
  // 2. Apply greased filter conditionally
  const displayedHogs = hogs
    .filter((hog) => !hiddenHogNames.includes(hog.name))
    .filter((hog) => (showGreasedOnly ? hog.greased : true));

  // 3. Apply sorting logic on the filtered dataset
  const sortedHogs = [...displayedHogs].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "weight") {
      return a.weight - b.weight;
    }
    return 0; // "none" option keeps default dataset order
  });

  return (
    <div className="App ui container">
      <Nav />
      <HogForm onAddHog={handleAddHog} />
      <FilterSortBar 
        showGreasedOnly={showGreasedOnly} 
        onToggleGreased={setShowGreasedOnly}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />
      
      <div className="ui grid container">
        {sortedHogs.map((hog) => (
          <HogTile 
            key={hog.name} 
            hog={hog} 
            onHideHog={handleHideHog} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
