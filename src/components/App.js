import React, { useState } from "react";
import Nav from "./Nav";
import HogCard from "./HogCard";

import hogs from "../porkers_data";

function App() {
  const [showGreasedOnly, setShowGreasedOnly] = useState(false);

  const filteredHogs = hogs.filter((hog) => {
    if (showGreasedOnly) {
      return hog.greased;
    }

    return true;
  });

  const hogCards = filteredHogs.map((hog) => {
    return <HogCard key={hog.name} hog={hog} />;
  });

  return (
    <div className="App">
      <Nav
        showGreasedOnly={showGreasedOnly}
        setShowGreasedOnly={setShowGreasedOnly}
      />

      <div className="ui grid container">
        {hogCards}
      </div>
    </div>
  );
}

export default App;