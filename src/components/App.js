import React, { useState } from 'react';
 eslint-disable-next-line no-unused-vars
import hogs from '../data/porkers_data'; // This import is necessary for state
import Nav from './Nav';
import HogTile from './HogTile';
import HogForm from './HogForm';

function App() {
  const [hogsState, setHogsState] = useState(hogs); // Using hogs to initialize state
  const [filterGreased, setFilterGreased] = useState(false);
  const [sortBy, setSortBy] = useState('');

  const toggleGreasedFilter = () => {
    setFilterGreased(!filterGreased);
  };

  const handleSort = (criteria) => {
    setSortBy(criteria);
  };

  const filteredHogs = filterGreased ? hogsState.filter(hog => hog.greased) : hogsState;
  const sortedHogs = [...filteredHogs].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'weight') return a.weight - b.weight;
    return 0;
  });

  const hideHog = (name) => {
    setHogsState(hogsState.filter(hog => hog.name !== name));
  };

  return (
    <div className="App">
      <Nav toggleGreasedFilter={toggleGreasedFilter} handleSort={handleSort} />
      <HogForm setHogsState={setHogsState} />
      <div className="ui grid container">
        {sortedHogs.map(hog => (
          <HogTile key={hog.name} hog={hog} hideHog={hideHog} />
        ))}
      </div>
    </div>
  );
}

export default App;
