
import React, { useState } from 'react';
import porkersData from '../porkers_data';
import HogTile from './HogTile';
import 'semantic-ui-css/semantic.min.css';

function App() {
  const [hogs, setHogs] = useState(porkersData);
  const [showGreased, setShowGreased] = useState(false);
  const [sortBy, setSortBy] = useState("name");
  const [newHog, setNewHog] = useState({
    name: '',
    specialty: '',
    weight: '',
    greased: false,
    image: '',
    'highest medal achieved': ''
  });

  // Function to hide a hog
  const hideHog = (name) => {
    setHogs((prevHogs) => prevHogs.filter(hog => hog.name !== name));
  };

  // Handle sorting
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  // Handle adding a new hog
  const addHog = (e) => {
    e.preventDefault();
    setHogs([...hogs, newHog]);
    setNewHog({
      name: '',
      specialty: '',
      weight: '',
      greased: false,
      image: '',
      'highest medal achieved': ''
    });
  };

  // Filter and sort hogs based on current state
  const filteredHogs = showGreased ? hogs.filter(hog => hog.greased) : hogs;
  const sortedHogs = [...filteredHogs].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "weight") return a.weight - b.weight;
    return 0;
  });

  return (
    <div className="ui container">
      <h1>Hog Showcase</h1>

      {/* Filter and Sort Controls */}
      <button onClick={() => setShowGreased(!showGreased)}>
        {showGreased ? "Show All Hogs" : "Show Greased Hogs Only"}
      </button>
      <select onChange={handleSortChange} value={sortBy}>
        <option value="name">Sort by Name</option>
        <option value="weight">Sort by Weight</option>
      </select>

      {/* Form to Add a New Hog */}
      <form onSubmit={addHog}>
        <input
          type="text"
          placeholder="Name"
          value={newHog.name}
          onChange={(e) => setNewHog({ ...newHog, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Specialty"
          value={newHog.specialty}
          onChange={(e) => setNewHog({ ...newHog, specialty: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Weight"
          value={newHog.weight}
          onChange={(e) => setNewHog({ ...newHog, weight: parseFloat(e.target.value) })}
          required
        />
        <input
          type="text"
          placeholder="Highest Medal Achieved"
          value={newHog['highest medal achieved']}
          onChange={(e) => setNewHog({ ...newHog, 'highest medal achieved': e.target.value })}
          required
        />
        <label>
          Greased
          <input
            type="checkbox"
            checked={newHog.greased}
            onChange={(e) => setNewHog({ ...newHog, greased: e.target.checked })}
          />
        </label>
        <input
          type="text"
          placeholder="Image URL"
          value={newHog.image}
          onChange={(e) => setNewHog({ ...newHog, image: e.target.value })}
          required
        />
        <button type="submit">Add Hog</button>
      </form>

      {/* Hog Display Grid */}
      <div className="ui grid">
        {sortedHogs.map((hog) => (
          <div className="ui eight wide column" key={hog.name}>
            <HogTile hog={hog} hideHog={hideHog} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
