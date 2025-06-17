import React from "react"

function Hog({ hog }) {
  return (
    <div class="ui card">
      <div class="image">
        <img src={hog.image} />
      </div>
      <div class="content">
        <div class="header">{hog.name}</div>
      </div>
    </div>
  )
}

export default Hog
