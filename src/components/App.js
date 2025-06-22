import React, {useState} from "react"
import Nav from "./Nav"
import HogCard from "./HogCard"
import hogs from "../porkers_data"

function App() {
  const [showGreasedHogs, setShowGreasedHogs] = useState(false)
  const [sortType, setSortType] = useState("none")

  const handleSelectGreasedHogs = () => {
    setShowGreasedHogs(!showGreasedHogs)
  }

  const handleSort = (event) => {
    setSortType(event.target.value)
  }

  const filteredHogs = hogs.filter((hog) => {
    return showGreasedHogs ? hog.greased : true
  })

  const sortedHogs = filteredHogs.sort((a, b) => {
    const hogA = a[sortType]
    const hogB = b[sortType]
    if (hogA < hogB) {
      return -1
    }
    if (hogA > hogB) {
      return 1
    }
    return 0
  })

  return (
    <div className="App">
      <Nav
        onGreasedCheck={handleSelectGreasedHogs}
        onSortSelect={handleSort}
        hogs={hogs}
      />
      <div className="ui grid container">
        {sortedHogs.map((hog) => (
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
