import React, {useState} from "react";
import Nav from "./Nav";
import HogsContainer from "./HogsContainer";
import Filter from "./Filter";
import Sort from "./Sort"
import hogs from "../porkers_data";


function App() {

	const [filter, setFilter] = useState('All')
	const [sort, setSort] = useState("None")

	const changeFilter = (e) => {
		// console.log(e.target.value)
		setFilter(e.target.value)
	}

	const filterHogs = () => {
		if (filter === "Greased") 
			return hogs.filter(hog => hog.greased)
		else if (filter === "Not Greased") 
		 	return hogs.filter(hog => !hog.greased)
		else return [...hogs]
	}

	const changeSort = (e) => {
		setSort(e.target.value)
	}

	const sortHogs = () => {
		let sortedHogs = filterHogs()

		if (sort === "Weight")
			return sortedHogs.sort((hog1, hog2) => hog1.weight - hog2.weight) 
		else if (sort === "Name")
			return sortedHogs.sort((hog1, hog2) => hog1.name.toLowerCase().localeCompare(hog2.name.toLowerCase()))
		else return sortedHogs
	}

	return (
		<div className="App">
			<Nav />
			<Filter changeFilter={changeFilter}/>
			<br />
			<Sort changeSort={changeSort}/>
			<br />
			<HogsContainer hogs={sortHogs()}/>
		</div>
	);
}

export default App;
