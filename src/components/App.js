import React from "react";
import Nav from "./Nav";
import Porkers from "./Porkers";

import hogs from "../porkers_data";

function App() {
  return (
    <div className="App">
      <Nav />
      <Porkers hogs={hogs}></Porkers>
    </div>
  );
}

export default App;
