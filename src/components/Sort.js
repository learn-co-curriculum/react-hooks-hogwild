import React from "react";
import icon from "../assets/ascending-sort.svg"


function Sort({onSetSort}) {
  function handleClick(e) {
    if(e.target.textContent == "Name") {
      e.target.textContent = "Weight"
      onSetSort("weight")
    } else {
      e.target.textContent = "Name"
      onSetSort("name")
    }
  }
  return (
  <div id="sortDiv">
    <button onClick={handleClick} className="sortBtn">Name</button>
    <img src={icon}></img>
  </div>)
}

export default Sort