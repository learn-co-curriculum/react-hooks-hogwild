import React, {useState} from "react";
import HogTile from "./HogTile";

function HogDisplay({hogs, filter, onSetHogs}) {
  const [selectedHog, setSelectedHog] = useState(0)

  function selectHog(id) {
    setSelectedHog(id)
  }

  const hogsToDisplay = (filter.greased ? hogs.filter(hog => hog.greased) : hogs).sort((a, b) => {
    if(filter.sort == 'name') {
      return a.name.localeCompare(b.name)
    } else {
      return b.weight - a.weight
    }
  }).filter(hog => !hog.hidden)

  function hideHog(e) {
    e.stopPropagation()
    // console.log()
    onSetHogs(hogs.map(hog => hog.id == selectedHog ? {...hog, hidden : true} : {...hog}))
    setSelectedHog(0)
  }

  return (
  <div className="indexWrapper">
    {hogsToDisplay.map(hog => {
      return <HogTile key={hog.id} hog={hog} selected={hog.id == selectedHog ? true : false} onSelectHog={selectHog} onHideHog={hideHog}/> 
    })}
  </div>)
}

export default HogDisplay