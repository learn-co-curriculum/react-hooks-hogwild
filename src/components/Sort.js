import React from 'react';

function Sort({ setSortBy }) {
  return (
    <div>
      <label>Sort By: </label>
      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value="">Select</option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
    </div>
  );
}

export default Sort;
