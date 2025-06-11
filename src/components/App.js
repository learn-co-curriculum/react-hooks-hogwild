import { useState } from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import hogs from "../porkers_data";
import HogViewer from "./HogViewer";

function App() {
	const [hogList, setHogList] = useState(hogs)


	return (
		<div className="App">
			<Nav />
			<Filter hogList={hogList} />
			<HogViewer hogs={hogList} />
		</div>
	);
}

export default App;
