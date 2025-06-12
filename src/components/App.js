import { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogViewer from "./HogViewer";
import Processor from "./Processor";

function App() {
	const [hogList, setHogList] = useState(hogs)
	const [displayedHogList, setDisplayedHogList] = useState(hogs)


	return (
		<div className="App">
			<Nav />
			<Processor displayedHogList={displayedHogList} setDisplayedHogList={setDisplayedHogList} hogList={hogList} />
			<HogViewer displayedHogList={displayedHogList} />
		</div>
	);
}

export default App;
