import React, {useState} from "react"
import HogDetails from "./HogDetails"

function HogCard({name, specialty, greased, weight, image, medal}) {
  const [showDetails, setShowDetails] = useState(false)
  const [hideHog, setHideHog] = useState(false)

  const handleClick = () => {
    setShowDetails(true)
  }

  const handleHideHog = (event) => {
    event.stopPropagation()
    setHideHog(true)
  }

  if (hideHog) return null

  return (
    <div className="card ui four wide column" onClick={handleClick}>
      <div className="image">
        <img src={image} />
      </div>
      <div className="content">
        <a className="header">{name}</a>
      </div>
      <div>
        <button onClick={handleHideHog}>Hide Hog</button>
      </div>
      <div>
        {showDetails && (
          <HogDetails
            specialty={specialty}
            greased={greased}
            weight={weight}
            medal={medal}
          />
        )}
      </div>
    </div>
  )
}

export default HogCard
