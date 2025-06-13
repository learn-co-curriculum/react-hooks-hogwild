import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import Filter from "./Filter";

import hogs from "../porkers_data";

function App() {
  const [hogList, setHogList] = useState(hogs);

  const filterGreased = (checked) => {
    checked ? setHogList(hogs.filter((hog) => hog.greased)) : setHogList(hogs);
  };

  return (
    <div className="App">
      <Nav />
      <Filter filterGreased={filterGreased} />
      <HogList hogs={hogList} />
    </div>
  );
}

export default App;
