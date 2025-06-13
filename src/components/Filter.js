import React, { useState } from "react";

const Filter = ({ filterGreased, setSort }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleGreasedChange = () => {
    const checkedStatus = !isChecked;
    setIsChecked(checkedStatus);
    filterGreased(checkedStatus);
  };

  const handleSortChange = (event) => {
    const sortBy = event.target.value;
    setSort(sortBy);
  };

  return (
    <div className="filterWrapper">
      <input
        type="checkbox"
        name="greasedOnly"
        onChange={handleGreasedChange}
      />
      <label htmlFor="greasedOnly">Greased hogs only?</label>
      <select name="sort" onChange={handleSortChange}>
        <option value="">No Sort</option>
        <option value="name">Sort By Name</option>
        <option value="weight">Sort By Weight</option>
      </select>
    </div>
  );
};

export default Filter;
