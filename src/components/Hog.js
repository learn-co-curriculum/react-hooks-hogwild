import React, { useState } from "react"

function Hog({ hog }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div onClick={handleClick} class="ui card">
      <div class="image">
        <img src={hog.image} />
      </div>
      <div class="content">
        <div class="header">{hog.name}</div>
      </div>
      {isOpen && (
        <>
          <div>Specialty: {hog.specialty}</div>
          <div>Weight: {hog.weight}</div>
          <div>Greased: {hog.greased ? "Greased" : "Not greased"}</div>
          <div>Highest Medal Achieved: {hog["highest medal achieved"]}</div>
        </>
      )}
    </div>
  )
}

export default Hog
