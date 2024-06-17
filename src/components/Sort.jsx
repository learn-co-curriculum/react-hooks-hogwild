import React from "react";


function Sort ({onSortChange}) {
  return (
    <div className="Filter">
      <label>Sort</label>
      <br></br>
      <select name="filter" onChange={onSortChange}>
        <option value="All">All</option>
        <option value="Name">Name</option>
        <option value="Weight">Weight</option>
      </select>
    </div>
);
}

export default Sort
