import React from "react";

const Filter = props => {
  return (
    <div className="filterWrapper">
      <form>
        <label>Sort By: </label>
        <select
          name="sort"
          onChange={props.handleSelectChange}
          value={props.sortBy}
        >
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
        <label>Greased Pigs Only?</label>
        <input
          checked={props.greased}
          onChange={props.handleToggleGreased}
          type="checkbox"
        />
      </form>
    </div>
  );
};

export default Filter;

