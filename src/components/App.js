import React, { useState } from "react";
import Nav from "./Nav";
import Controls from "./Controls";
import AddHogForm from "./AddHogForm";
import HogList from "./HogList";
import hogs from "../porkers_data";

function App() {
  const [hogList, setHogList] = useState(hogs);
  const [filterGreased, setFilterGreased] = useState(false);
  const [sortBy, setSortBy] = useState("none");
  const [hiddenHogs, setHiddenHogs] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  function getDisplayedHogs() {
    let displayed = hogList
      .filter((hog) => !hiddenHogs.includes(hog.name) && (filterGreased ? hog.greased : true));

    if (sortBy === "name") return [...displayed].sort((a, b) => a.name.localeCompare(b.name));
    if (sortBy === "weight") return [...displayed].sort((a, b) => a.weight - b.weight);
    return displayed;
  }

  return (
    <div className="App">
      <Nav />
      <Controls
        filterGreased={filterGreased}
        sortBy={sortBy}
        hiddenCount={hiddenHogs.length}
        showAddForm={showAddForm}
        onFilterChange={() => setFilterGreased(!filterGreased)}
        onSortChange={(e) => setSortBy(e.target.value)}
        onShowAll={() => setHiddenHogs([])}
        onToggleForm={() => setShowAddForm(!showAddForm)}
      />
      {showAddForm && (
        <AddHogForm onAddHog={(newHog) => {
          setHogList([...hogList, newHog]);
          setShowAddForm(false);
        }} />
      )}
      <HogList
        hogs={getDisplayedHogs()}
        onHide={(name) => setHiddenHogs([...hiddenHogs, name])}
      />
    </div>
  );
}

export default App;
