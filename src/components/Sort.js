import React from 'react';

const Sort = ({ setSortOption }) => {
  return (
    <div>
      <label>
        Sort by:
        <select onChange={(e) => setSortOption(e.target.value)}>
          <option value="">Select...</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </label>
    </div>
  );
};


export default Sort;

