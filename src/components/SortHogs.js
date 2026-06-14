import React from "react";

function SortHogs({ sortBy, onSortChange }) {
  return (
    <div className="filterWrapper">
      <label style={{ fontSize: "1.1em", fontWeight: "bold" }}>
        Sort Hogs By:
        <select value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
          <option value="none">Default (No Sorting)</option>
          <option value="name">Name (Alphabetical)</option>
          <option value="weight">Weight (Lightest to Heaviest)</option>
        </select>
      </label>
    </div>
  );
}

export default SortHogs;
