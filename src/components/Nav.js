import React from "react"
import piggy from "../assets/porco.png"

const Nav = ({ onGreasedToggle }) => {
  return (
    <div className="navWrapper">
      <div class="ui checkbox">
        <input onChange={onGreasedToggle} type="checkbox" name="greased" />
        <label>Greased?</label>
      </div>
      <span className="headerText">HogWild</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
    </div>
  )
}

export default Nav
