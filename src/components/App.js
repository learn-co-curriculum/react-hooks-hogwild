import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import Filter from "./Filter";

import hogs from "../porkers_data";

function App() {
  const [hogList, setHogList] = useState(hogs);
  const [sort, setSort] = useState("");

  const filterGreased = (checked) => {
    checked ? setHogList(hogs.filter((hog) => hog.greased)) : setHogList(hogs);
  };

  const getSortedList = () => {
    const listCopy = [...hogList];
    if (sort === "name") {
      return listCopy.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    } else if (sort === "weight") {
      return listCopy.sort((a, b) => a.weight - b.weight);
    } else {
      return listCopy;
    }
  };

  const sortedList = getSortedList();

  return (
    <div className="App">
      <Nav />
      <Filter filterGreased={filterGreased} setSort={setSort} />
      <HogList hogs={sortedList} />
    </div>
  );
}

export default App;
