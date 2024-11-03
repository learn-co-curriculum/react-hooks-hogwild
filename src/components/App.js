import React, { useState } from 'react';
import Nav from './Nav';  
import hogsData from '../porkers_data'; 

const App = () => {
  const [hogs, setHogs] = useState(hogsData);
  const [showGreased, setShowGreased] = useState(false);

  const sortHogs = (criteria) => {
    const sortedHogs = [...hogs].sort((a, b) => {
      if (criteria === 'name') {
        return a.name.localeCompare(b.name);
      } else if (criteria === 'weight') {
        return a.weight - b.weight;
      }
      return 0;
    });
    setHogs(sortedHogs);
  };

  const filteredHogs = showGreased
    ? hogs.filter(hog => hog.greased && hog.visible)
    : hogs.filter(hog => hog.visible);

  const deleteHog = (index) => {
    const updatedHogs = hogs.filter((_, i) => i !== index);
    setHogs(updatedHogs);
  };

  const toggleHogVisibility = (index) => {
    const updatedHogs = hogs.map((hog, i) => {
      if (i === index) {
        return { ...hog, visible: !hog.visible };
      }
      return hog;
    });
    setHogs(updatedHogs);
  };

  return (
    <div className="App">
      <Nav />
      <h1>Hogs Sorting</h1>
      <div>
        <button onClick={() => sortHogs('name')}>Sort by Name</button>
        <button onClick={() => sortHogs('weight')}>Sort by Weight</button>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={showGreased}
            onChange={() => setShowGreased(prev => !prev)}
          />
          Show Greased Hogs
        </label>
      </div>
      <ul>
        {filteredHogs.map((hog, index) => (
          <li key={index}>
            {hog.name} - {hog.weight} lbs {hog.greased ? '(Greased)' : ''}
            <button onClick={() => toggleHogVisibility(index)}>
              {hog.visible ? 'Hide' : 'Show'}
            </button>
            <button onClick={() => deleteHog(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
