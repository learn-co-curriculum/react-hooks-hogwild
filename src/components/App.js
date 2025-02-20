import React from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import Title from "./Title"

function App() {
	const hog = hogs.map((hog) => {
		return <
			Title 
			name={hog.name} 
			specialty={hog.specialty}
			greased={hog.greased}
			weight={hog.weight}
			highest_medal={hog["highest medal achieved"]}
			image={hog.image} 
			key={hog.name}/>
	})

	return (
		<div className="App">
			<Nav />
			{hog}
		</div>
	);
}

export default App;
