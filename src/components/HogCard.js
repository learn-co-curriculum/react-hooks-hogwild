import React from "react"

function HogCard({name, specialty, greased, weight, image, medal}) {
  return (
    <div className="ui card">
      <div className="image">
        <img src={image} />
      </div>
      <div className="content">
        <a className="header">{name}</a>
      </div>
    </div>
  )
}

export default HogCard
