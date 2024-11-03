import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Cards from "./Cards"; 
import Sort from "./Sort"; 
import Filter from "./Filter"; 
import HogForm from "./Form"; // Import HogForm

function App() {
  const [hogsData, setHogsData] = useState(hogs); // State to manage hogs
  const [sortOption, setSortOption] = useState('');
  const [showGreased, setShowGreased] = useState(false);

  const filteredHogs = showGreased 
    ? hogsData.filter(hog => hog.greased) 
    : hogsData;

  const sortedHogs = [...filteredHogs].sort((a, b) => {
    if (sortOption === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortOption === 'weight') {
      return b.weight - a.weight;
    }
    return 0; // No sorting
  });

  const addHog = (newHog) => {
    setHogsData([...hogsData, newHog]); // Add the new hog to the list
  };

  return (
    <div className="App">
      <Nav />
      <Filter setShowGreased={setShowGreased} />
      <Sort setSortOption={setSortOption} />
      <HogForm addHog={addHog} /> {/* Render HogForm and pass addHog */}
      {sortedHogs.map((hog) => (
        <Cards
          key={hog.name} // Use a unique ID if available
          name={hog.name}
          specialty={hog.specialty}
          greased={hog.greased}
          weight={hog.weight}
          highest={hog["highest medal achieved"]} 
          image={hog.image}
        />
      ))}
    </div>
  );
}

export default App;
