import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import hogs from "../porkers_data";



function App() {
	const [hogsData, setHogData] = useState(hogs)
	// console.log(hogsData)
	return (
		<div className="App">
			<Nav />
			<HogList hogsData = {hogsData}/>
		</div>
	);
}

export default App;
