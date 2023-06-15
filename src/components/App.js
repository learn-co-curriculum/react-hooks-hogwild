import React from "react";
import Nav from "./Nav";
import Card from "./Card";


import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<Card 
				name= {hogs.name}
				image= {hogs.image}
			/>
		</div>
	);
}

export default App;
