import React from "react"
import Nav from "./Nav"
import Hog from "./Hog"

import hogs from "../porkers_data"

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="ui grid container">
        {hogs.map((hog) => (
          <Hog hog={hog} />
        ))}
      </div>
    </div>
  )
}

export default App
