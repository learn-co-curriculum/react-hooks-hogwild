import React, { useState } from "react";
import SortDropdown from "./SortDropdown";
import HogTile from "./HogTile";

const HogList = ({ hogs }) => {
	const [showGreased, setShowGreased] = useState(false)
	const [sortValue, setSortValue] = useState('')
	const [nonHiddenList, setNonHiddenList] = useState(hogs)
	
	const handleFilterGreased = () => setShowGreased(showGreased => !showGreased)
	const handleSort = (sortValue) => setSortValue(sortValue)

	const handleHideHog = (hogToHide) => {
		setNonHiddenList(nonHiddenList.filter(hog => hog.name !== hogToHide))	
	}

	const handleShowAllHogs = () => setNonHiddenList(hogs)

	const sortedList = [...nonHiddenList].sort((a, b) => {
		if(sortValue === 'name'){
			return a.name.localeCompare(b.name)
		} else if(sortValue === 'weight') {
			return a.weight - b.weight
		}
	})

	const filteredList = showGreased ? sortedList.filter(hog => hog.greased) : sortedList
	
	return (
		<>
			<div>
				<button className="ui button"
					style={showGreased ? {backgroundColor: 'lightblue'} : null} 
					onClick={handleFilterGreased}>
						Filter Greased Hogs
				</button>
				<button className="ui button"
					style={{marginLeft: '20px', marginBottom: '20px'}} 
					onClick={handleShowAllHogs}>
						Show All Hogs
				</button>
			</div>
			<SortDropdown handleSort={handleSort} />
			<div className="ui grid container">
				<div className="ui eight wide column">
					{filteredList.map(hog => {
						return <HogTile key={hog.name} hog={hog} handleHideHog={handleHideHog} />
					})}
				</div>
			</div>
		</>
	)
}

export default HogList;
