import React, { useState } from "react";
import Nav from "./Nav";
import PigsList from "./PigsList";
import Form from "./Form";

import hogs from "../porkers_data";

function App() {
  const [hogsList, setHogList] = useState(hogs);

  function handleAddingNewPig(newPig) {
    return setHogList([...hogsList, newPig]);
  }

  return (
    <div className="App">
      <Nav />
      <Form onAddPig={handleAddingNewPig} />
      <PigsList hogs={hogsList} />
    </div>
  );
}

export default App;

