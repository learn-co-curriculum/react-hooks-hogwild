import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({setGreaseFilter, setSortByWeight}) => {

  const handleClickSort = (e) => {
    e.preventDefault()
    const sortByWeight = e.target.classList.contains('On')
    sortByWeight ? e.target.classList.remove('On') : e.target.classList.add('On')
    sortByWeight ? e.target.textContent = 'Sort Hogs By Name' : e.target.textContent = 'Sort Hogs By Weight'
    setSortByWeight(sortByWeight ? true : false)
  }

  const handleClickFilter = (e) => {
    e.preventDefault()
    const toggleFilter = e.target.classList.contains('On')
    toggleFilter ? e.target.classList.remove('On') : e.target.classList.add('On')
    toggleFilter ? e.target.textContent = 'Click for the full list of hogs' : e.target.textContent = 'Click if you love greasy hogs'
    setGreaseFilter(toggleFilter ? true : false)
  }

	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
      <div>
        <button onClick={handleClickFilter}>Click if you love greasy hogs</button>
        <button onClick={handleClickSort}>Sort Hogs By Weight</button>
      </div>
		</div>
	);
};

export default Nav;
