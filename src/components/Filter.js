import React from 'react';

const Filter = ({ setShowGreased }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          onChange={(e) => setShowGreased(e.target.checked)}
        />
        Show Greased Hogs
      </label>
    </div>
  );
};

export default Filter;
