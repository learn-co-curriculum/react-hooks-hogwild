import React from "react"

function HogDetails({specialty, greased, weight, medal}) {
  return (
    <div>
      <p>Specialty: {specialty}</p>
      <p>Greased: {greased}</p>
      <p>Weight: {weight}</p>
      <p>Highest Achieving Medal: {medal}</p>
    </div>
  )
}

export default HogDetails
