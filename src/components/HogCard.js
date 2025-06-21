import React from "react"
import HogDetails from "./HogDetails"

function HogCard({name, specialty, greased, weight, image, medal}) {
  return (
    <div className="card ui four wide column">
      <div className="image">
        <img src={image} />
      </div>
      <div className="content">
        <a className="header">{name}</a>
      </div>
      <ol>
        <HogDetails
          name={name}
          specialty={specialty}
          greased={greased}
          weight={weight}
          medal={medal}
        />
      </ol>
    </div>
  )
}

export default HogCard
