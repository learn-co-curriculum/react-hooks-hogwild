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

	const sortHogs = (list, sortBy) => {
		if (sortBy === "name") {
			return [...list].sort((a, b) => a.name.localeCompare(b.name));
		} else if (sortBy === "weight") {
			return [...list].sort((a, b) => a.weight - b.weight);
		}
		return [...list];
	};

	const addHog = (newHog) => {
		setHogList(prevHogs => [...prevHogs, newHog]);
		setDisplayedHogList(prevDisplayed => sortHogs([...prevDisplayed, newHog], currentFilter));
	};

	const sortHogList = (sortBy) => {
		setDisplayedHogList(sortHogs(displayedHogList, sortBy));
		setHogList(sortHogs(hogList, sortBy));
		setCurrentFilter(sortBy);
	};

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
