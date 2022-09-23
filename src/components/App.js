import React from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import hogs from "../porkers_data";

/*function renderHog(hogData){

}*/

function App() {
	//hogs.forEach(hog => {renderHog(hog)})
	const hogsDisplay = hogs 
	return (
		<div className="App">
			<Nav />
			<HogList hogs = {hogsDisplay}/>
		</div>
	);
}

export default App;
