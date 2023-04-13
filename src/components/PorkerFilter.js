import React from "react";

function PorkerFilter({ onOptionSelect }) {
  const handleSelect = (e) => {
    // console.log(e.target.value);
    onOptionSelect(e.target.value);
  };
  return (
    <div>
      <select onChange={handleSelect}>
        <option value="All">All</option>
        <option value="Not Greased">Not greased</option>
        <option value="Greased">Greased</option>
      </select>
    </div>
  );
}

export default PorkerFilter;
