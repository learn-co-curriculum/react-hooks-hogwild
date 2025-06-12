import { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogViewer from "./HogViewer";
import Processor from "./Processor";

function App() {
	const [hogList, setHogList] = useState(hogs)
	const [displayedHogList, setDisplayedHogList] = useState(hogs)
	const [currentFilter, setCurrentFilter] = useState('')

	const hogListProps = {
		hogList,
		setHogList,
		displayedHogList,
		setDisplayedHogList
	}

	const addHog = (newHog) => {
		setHogList(prevHogs => {
			const updatedHogs = [...prevHogs, newHog];
			return updatedHogs;
		});
		setDisplayedHogList(prevDisplayed => {
			const updatedDisplayed = [...prevDisplayed, newHog];
			// Sort after adding the new hog
			let sortedDisplayed = [...updatedDisplayed];
			if (currentFilter === "name") {
				sortedDisplayed.sort((a, b) => a.name.localeCompare(b.name));
			} else if (currentFilter === "weight") {
				sortedDisplayed.sort((a, b) => a.weight - b.weight);
			}
			return sortedDisplayed;
		});
	}

	const sortHogList = (sortBy) => {
		let sortedDisplayList = [...displayedHogList];
		let sortedList = [...hogList];
		if (sortBy === "name") {
			sortedDisplayList.sort((a, b) => a.name.localeCompare(b.name));
			sortedList.sort((a, b) => a.name.localeCompare(b.name));
		} else if (sortBy === "weight") {
			sortedDisplayList.sort((a, b) => a.weight - b.weight);
			sortedList.sort((a, b) => a.weight - b.weight);
		} else {
			sortedDisplayList = [...displayedHogList];
			sortedList = [...hogList];
		}
		setDisplayedHogList(sortedDisplayList);
		setHogList(sortedList);
		setCurrentFilter(sortBy)
	}

	const sortHogListsFromEvent = (event) => {
		const sortBy = event.target.value;
		sortHogList(sortBy)
	};

	return (
		<div className="App">
			<Nav addHog={addHog} />
			<Processor hogListProps={hogListProps} sortHogListsFromEvent={sortHogListsFromEvent} />
			<HogViewer hogListProps={hogListProps} />
		</div>
	);
}

export default App;
