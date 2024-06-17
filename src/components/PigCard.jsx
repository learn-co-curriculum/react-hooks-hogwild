import React, { useState } from "react";

function PigCard ({ hog }) {
  const{name, image, greased, specialty, weight, "highest medal achieved":medal } = hog
  const [isSelected, setIsSelected] = useState(false)

  function handlePigClick () {
    setIsSelected((isSelected) => !isSelected)
  }

  const PigDetails = (
    <div>
      <p>Specialty:{specialty}</p>
      <p>Weight:{weight}</p>
      <p>Greased:{greased? " Yes " : " Get the grease "}</p>
      <p>Highest Medal: <span style={{ color: medal }}>{medal}</span></p>
    </div>
  )

  return (
    <div className="pigTile ui card eight wide column" onClick={handlePigClick}>
      <h3>{name}</h3>
      <img src={image} alt={name}></img>
      {isSelected && PigDetails}
    </div>
  )
}

export default PigCard
