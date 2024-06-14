import React, { useState } from "react";

import Nav from "./Nav";
import PigList from "./PigList";
import Filter from "./Filter";
import Sort from "./Sort";
import HideHogs from "./HideHogs";

import hogs from "../porkers_data";
import PigForm from "./PigForm";

function App() {
  const [allHogs, setAllHogs] = useState(hogs)

	return (
		<div className="App">
			<Nav />
      <PigForm hogs={hogs} allHogs={allHogs} setAllHogs={setAllHogs}/>
      <Filter hogs={hogs} allHogs={allHogs} setAllHogs={setAllHogs} />
      <Sort allHogs={allHogs} setAllHogs={setAllHogs} hogs={hogs}/>
      <HideHogs allHogs={allHogs} setAllHogs={setAllHogs} hogs={hogs}/>
      <PigList className='ui grid container' hogs={hogs} allHogs={allHogs}/>
		</div>
	)
}

export default App;
