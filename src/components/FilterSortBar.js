import React from "react";

function FilterSortBar({ 
  showGreasedOnly, 
  onToggleGreased, 
  sortBy, 
  onSortChange 
}) {
  return (
    <div className="ui menu" style={{ margin: "20px 0" }}>
      <div className="item">
        <div className="ui checkbox">
          <input 
            type="checkbox" 
            checked={showGreasedOnly} 
            onChange={(e) => onToggleGreased(e.target.checked)} 
            id="greased-filter"
          />
          <label htmlFor="greased-filter">Show Greased Only</label>
        </div>
      </div>
      
      <div className="item">
        <label style={{ marginRight: "10px" }}>Sort By:</label>
        <select 
          className="ui dropdown" 
          value={sortBy} 
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="none">None</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
    </div>
  );
}

export default FilterSortBar;
