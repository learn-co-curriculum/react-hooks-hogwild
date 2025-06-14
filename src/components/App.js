import React from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogList from "./HogList";

function App() {
  return (
    <div>
      <Nav />
      <HogList hogs={hogs} />
    </div>
  );
}

export default App;
