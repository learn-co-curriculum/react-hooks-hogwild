import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({
  showGreasedOnly,
  setShowGreasedOnly,
  sortBy,
  setSortBy,
}) => {
  return (
    <div className="navWrapper">
      <span className="headerText">HogWild</span>

      <div className="TwirlyPig">
        <img
          src={piggy}
          className="App-logo"
          alt="piggy"
        />
      </div>

      <span className="normalText">
        A React App for County Fair Hog Fans
      </span>

      <div className="navControls">
        <label>
          Greased Only
          <input
            type="checkbox"
            checked={showGreasedOnly}
            onChange={() =>
              setShowGreasedOnly(!showGreasedOnly)
            }
          />
        </label>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="none">Sort By...</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
    </div>
  );
};

export default Nav;