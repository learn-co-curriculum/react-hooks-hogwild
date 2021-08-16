import React from "react";
import Nav from "./Nav";

import hogdata from "../porkers_data";
import { useState } from 'react'
import HogCardArea from "./HogCardArea";
import InfoBar from "./InfoBar";
import Filter from "./Filter";

function App() {
	const[hogs, setHogs] = useState(hogdata)
	const[currentHog, setCurrentHog] = useState(hogs[0])
	console.log(hogs)

	


	return (
		<div className="App">
			<Nav />
			<InfoBar hog={currentHog}/>
			<Filter/>
			<HogCardArea hogs={hogs} setCurrentHog={setCurrentHog}/>
			
		</div>
	);
}

export default App;
