import React from "react"
import Filter from "./Filter"
import Sort from "./Sort"

function FilterAndSort({ onSetFilter, filterSettings, onRevealHidden, onSetEditMode }) {
  function setGreased(greased) {
    onSetFilter({...filterSettings, greased: greased})
  }
  function setSort(sort) {
    onSetFilter({...filterSettings, sort: sort})
  }
  function setEdit(e) {
    e.target.textContent === "Add Hog" ? e.target.textContent = "Cancel" : e.target.textContent = "Add Hog"
    onSetEditMode()
  }

  return (
    <div id="filterBar">
      <Filter onSetGreased={setGreased} />
      <Sort onSetSort={setSort}/>
      <button className="sortBtn" onClick={onRevealHidden}>Reveal All</button>
      <button className="sortBtn" onClick={setEdit}>Add Hog</button>
    </div>
  )
}

export default FilterAndSort
