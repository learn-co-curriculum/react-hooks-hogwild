import React from "react"
import Nav from "./Nav"
import HogCard from "./HogCard"

import hogs from "../porkers_data"

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="ui grid container">
        {hogs.map((hog) => (
          <HogCard
            key={hog.name}
            name={hog.name}
            specialty={hog.specialty}
            greased={hog.greased}
            weight={hog.weight}
            image={hog.image}
            medal={hog["highest medal achieved"]}
          />
        ))}
      </div>
    </div>
  )
}

export default App
