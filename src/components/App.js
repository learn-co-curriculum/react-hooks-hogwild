import React, { useState } from "react";
import Nav from "./Nav";
import DisplayList from "./DisplayList";
import FilterHogs from "./FilterHogs";
import SortHogs from "./SortHogs";
import hogsData from "../porkers_data";

function App() {
  const [showOnlyGreased, setShowOnlyGreased] = useState(false);
  const [sortBy, setSortBy] = useState("none");

  const filteredHogs = hogsData.filter((hog) => {
    if (showOnlyGreased) return hog.greased === true;
    return true;
  });

  const displayedHogs = [...filteredHogs].sort((hogA, hogB) => {
    if (sortBy === "name") {
      return hogA.name.localeCompare(hogB.name);
    }
    if (sortBy === "weight") {
      return hogA.weight - hogB.weight;
    }
    return 0;
  });
	

  return (
    <div className="App">
      <Nav />

      <FilterHogs
        showOnlyGreased={showOnlyGreased}
        onToggleGreased={setShowOnlyGreased}
      />

      <SortHogs sortBy={sortBy} onSortChange={setSortBy} />

      <DisplayList hogs={displayedHogs} />
      <div className="footer"></div>
    </div>
  );
}

export default App;
