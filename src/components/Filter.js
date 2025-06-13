import React, { useState } from "react";

const Filter = ({ filterGreased }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    const checkedStatus = !isChecked;
    setIsChecked(checkedStatus);
    filterGreased(checkedStatus);
  };

  return (
    <div className="filterWrapper">
      <input type="checkbox" name="greasedOnly" onChange={handleChange} />
      <label htmlFor="greasedOnly">Greased hogs only?</label>
    </div>
  );
};

export default Filter;
