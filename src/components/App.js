import React, { useState } from "react"
import Nav from "./Nav"
import Hog from "./Hog"

import hogs from "../porkers_data"

function App() {
  const [showGreasedOnly, setShowGreasedOnly] = useState(false)

  const toggleShowGreasedOnly = () => {
    setShowGreasedOnly(!showGreasedOnly)
  }

  const filteredHogs = hogs.filter((hog) => {
    return showGreasedOnly ? hog.greased : true
  })

  // ** Alternate solution **
  //
  // const filteredHogs = showGreasedOnly
  //   ? hogs.filter((hog) => hog.greased)
  //   : hogs

  return (
    <div className="App">
      <Nav onGreasedToggle={toggleShowGreasedOnly} />
      <div className="ui grid container">
        {filteredHogs.map((hog) => (
          <Hog hog={hog} />
        ))}
      </div>
    </div>
  )
}

export default App
