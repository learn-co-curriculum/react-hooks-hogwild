import React from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Tiles from "./Tiles";

function App() {


	return (
		<div className="App">
			<Nav />
			<Tiles hogs={hogs}/>
		</div>
	);
}

export default App;
