import React, {useState} from "react"
import Nav from "./Nav"
import HogCard from "./HogCard"
import hogs from "../porkers_data"

function App() {
  const [showGreasedHogs, setShowGreasedHogs] = useState(false)

  const handleSelectGreasedHogs = () => {
    setShowGreasedHogs(!showGreasedHogs)
  }

  const greasedHogs = hogs.filter((hog) => {
    return showGreasedHogs ? hog.greased : true
  })

  return (
    <div className="App">
      <Nav onGreasedCheck={handleSelectGreasedHogs} />
      <div className="ui grid container">
        {greasedHogs.map((hog) => (
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
