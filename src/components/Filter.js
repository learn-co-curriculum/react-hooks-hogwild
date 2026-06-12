import React from "react"

function Filter({ onSetGreased }) {
  function handleFilter(e) {
    e.target.checked ? onSetGreased(true) : onSetGreased(false)
  }

  return (
    <div className="toggle-container">
      <span id="switch-label" className="toggle-text">
        Greased?
      </span>
      <label className="switch" htmlFor="toggle-input" onChange={handleFilter}>
        <input
          type="checkbox"
          id="toggle-input"
          role="switch"
          aria-labelledby="switch-label"
        ></input>
        <span className="slider"></span>
      </label>
    </div>
  )
}

export default Filter
