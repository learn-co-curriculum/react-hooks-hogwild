import React, { useState } from 'react'
import HogDetails from './HogDetails'

import augustus_gloop from '../assets/augustus_gloop.jpg'
import babe from '../assets/babe.jpg'
import bailey from '../assets/bailey.jpg'
import cherub from '../assets/cherub.jpg'
import galaxy_note from '../assets/galaxy_note.jpg'
import leggo_my_eggo from '../assets/leggo_my_eggo.jpg'
import peppa from '../assets/peppa.jpg'
import piggy_smalls from '../assets/piggy_smalls.jpg'
import piglet from '../assets/piglet.jpg'
import porkchop from '../assets/porkchop.jpg'
import trouble from '../assets/trouble.jpg'
import truffle_shuffle from '../assets/truffle_shuffle.jpg'

const imageMap = {
  augustus_gloop: augustus_gloop,
  babe: babe,
  bailey: bailey,
  cherub: cherub,
  galaxy_note: galaxy_note,
  leggo_my_eggo: leggo_my_eggo,
  peppa: peppa,
  piggy_smalls: piggy_smalls,
  piglet: piglet,
  porkchop: porkchop,
  trouble: trouble,
  truffle_shuffle: truffle_shuffle,
}

function HogCard({ hog }) {
  const [isHidden, setIsHidden] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  function handleDetailsClick() {
    setShowDetails(prevShowDetails => !prevShowDetails)
  }

  // hide the hog
  if (isHidden) return null;

  // show the hog
  const { name, specialty } = hog

  const imageFileName = name.split(" ").join("_").toLowerCase()

  const image = imageMap[imageFileName]

  return (
    <div className="ui card eight wide column pigTile">
        <div className="image">
          <img src={image} alt="hogPic" />
        </div>
        <div className="content">
          <h3 className="header">{name}</h3>
          <div className="description">Specialty: {specialty}</div>
        </div>
        <div className="extra content">
          {showDetails ? <HogDetails hog={hog} /> : null}

          <button className="ui button" onClick={handleDetailsClick}>
            {showDetails ? "Less Info" : "More Info"}
          </button>
          <button className="ui button" onClick={() => setIsHidden(true)}>
            Hide Me{" "}
            <span role="img" aria-label="snout">
              🐽
            </span>
          </button>
        </div>
      </div>
  )
}

export default HogCard