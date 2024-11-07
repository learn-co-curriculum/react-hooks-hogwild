import React from 'react';

function Filter({ filterGreased, setFilterGreased }) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={filterGreased}
          onChange={(e) => setFilterGreased(e.target.checked)}
        />
        Show Greased Hogs Only
      </label>
    </div>
  );
}

export default Filter;
