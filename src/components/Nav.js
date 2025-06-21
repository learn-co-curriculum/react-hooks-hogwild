import React from "react"
import piggy from "../assets/porco.png"

const Nav = ({onGreasedCheck, onSortSelect}) => {
  return (
    <div className="navWrapper">
      <span className="headerText">HogWild</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <br />
      <br />
      <div className="ui checkbox">
        <input onChange={onGreasedCheck} type="checkbox" name="example" />
        <label>Greased Only</label>
      </div>
      <div className="ui">
        <select onChange={onSortSelect}>
          <option value="none">None</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
    </div>
  )
}

export default Nav
