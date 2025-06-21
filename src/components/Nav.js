import React from "react"
import piggy from "../assets/porco.png"

const Nav = ({onGreasedClick}) => {
  return (
    <div className="navWrapper">
      <span className="headerText">HogWild</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <button onClick={onGreasedClick}>Greased Only?</button>
    </div>
  )
}

export default Nav
