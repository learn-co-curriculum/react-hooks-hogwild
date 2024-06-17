import React from "react";

function Filter ({ onCategoryChange }) {
  return (
    <div className="Filter">
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">"All"</option>
        <option value="Greased">Greased</option>
        <option value="Not Greased">Not Greased</option>
      </select>
      <label>GREASED STATUS</label>
    </div>
  );
}

export default Filter
