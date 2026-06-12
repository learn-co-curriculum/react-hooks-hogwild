import React from "react";
import Nav from "./Nav";
import HogCard from "./HogCard";

import hogs from "../porkers_data";

function App() {
  const hogCards = hogs.map((hog) => {
    return <HogCard key={hog.name} hog={hog} />;
  });

  return (
    <div className="App">
      <Nav />
      {hogCards}
    </div>
  );
}

export default App;