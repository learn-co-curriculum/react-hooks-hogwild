import React from 'react'
import Tile from './Tile'

function PigList({ allHogs }) {
  const createHogList = allHogs.map((hog) => {
    return (
      <Tile
        className='pigTile ui eight wide column'
        key={hog.name}
        name={hog.name}
        img={hog.image}
        specialty={hog.specialty}
        weight={hog.weight}
        greased={hog.greased}
        medal={hog['highest medal achieved']}
      />
    )
  })

  return (
    <div className='ui grid container'>
      {createHogList}
    </div>
  )
}

export default PigList
