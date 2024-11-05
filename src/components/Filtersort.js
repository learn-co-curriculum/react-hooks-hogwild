import React from "react";

const FilterSort = ({ filterGreased, setFilterGreased, setSortType }) => {
  return (
    <div className="filter-sort">
      <div className="filter">
        <label>
          <input
            type="checkbox"
            checked={filterGreased}
            onChange={() => setFilterGreased(!filterGreased)}
          />
          Greased Hogs
        </label>
      </div>

      <div className="sort">
        <label>
          Sort by:
          <select onChange={(e) => setSortType(e.target.value)}>
            <option value="">Select</option>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default FilterSort;