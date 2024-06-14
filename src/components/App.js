import React, {useState} from "react";
import Nav from "./Nav";
import Menu from './Menu';

import hogs from "../porkers_data";

function App() {
  const [greaseFilter, setGreaseFilter] = useState('')
  const [sortByWeight, setSortByWeight] = useState('')

	return (
		<div className="App">
			<Nav setGreaseFilter={setGreaseFilter} setSortByWeight={setSortByWeight}/>
      <Menu hogs={hogs} greaseFilter={greaseFilter} sortByWeight={sortByWeight}/>
		</div>
	);
}

export default App;
