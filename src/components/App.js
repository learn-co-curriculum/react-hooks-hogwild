import { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogViewer from "./HogViewer";
import Processor from "./Processor";

function App() {
	const [hogList, setHogList] = useState(hogs)
	const [displayedHogList, setDisplayedHogList] = useState(hogs)

	const hogListProps = {
		hogList,
		setHogList,
		displayedHogList,
		setDisplayedHogList
	}

	return (
		<div className="App">
			<Nav />
			<Processor hogListProps={hogListProps} />
			<HogViewer hogListProps={hogListProps} />
		</div>
	);
}

export default App;
