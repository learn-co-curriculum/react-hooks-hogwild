import React, {useState} from "react";
import HogCard from "./HogCard";

function HogList({hogs}){
    const[filterCategory, setFilterCategory] = useState("All");
    const[sortCategory, setSortCategory] = useState("Default");

	function changeFilter(event) {
		setFilterCategory(event.target.value);
	}

    function sortBy(event) {
        setSortCategory(event.target.value);
    }

    const hogList = hogs.filter((pig) => {
        if (filterCategory === "All") {
            return pig;
        } 
        if (pig.greased.toString() === filterCategory) {
            return pig;
        }
    })

    let sortHog = [...hogList];
    if (sortCategory === "name-ascending") {
        sortHog = sortHog.sort((a, b) => (a.name > b.name) - (a.name < b.name));
    }

    if (sortCategory === "name-descending") {
        sortHog = sortHog.sort((a, b) => (b.name > a.name) - (b.name < a.name));
    }

    if (sortCategory === "weight-ascending") {
        sortHog.sort((a, b) => (a.weight > b.weight) - (a.weight < b.weight));
    }
    
    if (sortCategory === "weight-descending") {
        sortHog.sort((a, b) => (b.weight > a.weight) - (b.weight < a.weight));
    }

    if (sortCategory === "Default") {
        sortHog = [...hogList];
    }
    
    // console.log(sortHog.sort((a, b) => (a.name > b.name) - (a.name < b.name)));
    //console.log(sortHog.sort((a, b) => (a.weight > b.weight) - (a.weight < b.weight)));


    return (
        <div>
            <select name="filter" onChange={changeFilter}>
				<option value="All">Filter by Greasiness</option>
				<option value="true">Greased</option>
				<option value="false">Not Greased</option>
			</select>

            <select name="sort" onChange={sortBy}>
				<option value="Default">Sort by...</option>
				<option value="name-ascending">Name (Ascending)</option>
				<option value="weight-ascending">Weight (Ascending)</option>
                <option value="name-descending">Name (Descending)</option>
				<option value="weight-descending">Weight (Descending)</option>
			</select>

            {sortHog.map(hog => (
                <HogCard hog = {hog}/>
            ))}

        </div>
    )
    
}

export default HogList;
