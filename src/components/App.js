import React, {useState} from "react";
import Nav from "./Nav";
import HogDisplay from "./HogDisplay";
import hogData from "../porkers_data";
import FilterAndSort from "./FilterAndSort";
import AddForm from "./AddForm";

function App() {
	const [hogs, setHogs] = useState(hogData.map(hog => {return {...hog, hidden: false}}))
  const [editMode, setEditMode] = useState(false)
	const [filter, setFilter] = useState({
		greased: false,
		sort: 'name'
	})
	
	function revealHidden() {
		console.log("reveal your hog")
		setHogs(hogs.map(hog => { return {...hog, hidden: false}}))
	}

	function addHog(formData) {
		const newHog = {
			...formData,
			hidden: false,
			id: Math.max(...hogs.map(hog => hog.id)) + 1
		}
		
		setHogs([...hogs, newHog])
	}

	return (
		<div className="App">
			<Nav />
			<FilterAndSort onSetFilter={setFilter} filterSettings={filter} onRevealHidden={revealHidden} onSetEditMode={() => {setEditMode(!editMode)}}/>
			<AddForm isHidden={editMode} onAddHog={addHog}/>
			<HogDisplay hogs={hogs} filter={filter} onSetHogs={setHogs} />
		</div>
	);
}

export default App;
