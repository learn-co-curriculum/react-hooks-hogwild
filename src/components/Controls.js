import React from "react";

function Controls({ filterGreased, sortBy, hiddenCount, onFilterChange, onSortChange, onShowAll, onToggleForm, showAddForm }) {
  return (
    <div className="ui container">

      <label>
        <input
          type="checkbox"
          checked={filterGreased}
          onChange={onFilterChange}
        />
        Show only greased hogs
      </label>

      <label>Sort by:</label>
      <select value={sortBy} onChange={onSortChange} className="ui dropdown">
        <option value="none">None</option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>

      {hiddenCount > 0 && (
        <button className="ui button basic" onClick={onShowAll}>
          Show All ({hiddenCount} hidden)
        </button>
      )}

      <button className="ui button primary" onClick={onToggleForm}>
        {showAddForm ? "Cancel" : "+ Add a Hog"}
      </button>

    </div>
  );
}

export default Controls;