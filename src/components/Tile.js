import React, { useState } from 'react'

function Tile({ name, img, specialty, weight, greased, medal, className }) {
  const [selectedHog, setSelectedHog] = useState(false)

  function handleClick() {
    setSelectedHog(!selectedHog)
  }

  return (
    <div className={className} onClick={handleClick}>
      <h3>{name}</h3>
      <img src={img} alt={name} />
      {selectedHog &&(
        <div>
          <p>Specialty: {specialty}</p>
          <p>Weight: {weight}</p>
          <p>Greased: {greased ? 'Yes' : 'No'}</p>
          <p>Highest Medal Achieved: {medal}</p>
        </div>
      )}
    </div>
  )
}

export default Tile
