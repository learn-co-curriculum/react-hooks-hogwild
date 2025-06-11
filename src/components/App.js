import { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import HogViewer from "./HogViewer";

function App() {
	return (
		<div className="App">
			<Nav />
			<HogViewer hogs={hogs} />
		</div>
	);
}

export default App;
