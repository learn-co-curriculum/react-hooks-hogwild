import React, { useState } from "react"
import Nav from "./Nav"
import Hog from "./Hog"

import hogs from "../porkers_data"

function App() {
  const [showGreasedOnly, setShowGreasedOnly] = useState(false)
  const [sortValue, setSortValue] = useState("none")

  const toggleShowGreasedOnly = () => setShowGreasedOnly(!showGreasedOnly)
  const handleSortChange = (event) => setSortValue(event.target.value)

  const filteredHogs = hogs.filter((hog) => {
    return showGreasedOnly ? hog.greased : true
  })

  const filteredAndSortedHogs = filteredHogs.sort((a, b) => {
    const valueA = String(a[sortValue])
    const valueB = String(b[sortValue])

    return valueA.localeCompare(valueB)
  })

  // ** Alternate solution **
  //
  // const filteredHogs = showGreasedOnly
  //   ? hogs.filter((hog) => hog.greased)
  //   : hogs

  return (
    <div className="App">
      <Nav
        onGreasedToggle={toggleShowGreasedOnly}
        handleSortChange={handleSortChange}
      />
      <div className="ui grid container">
        {filteredAndSortedHogs.map((hog) => (
          <Hog hog={hog} />
        ))}
      </div>
    </div>
  )
}

export default App
