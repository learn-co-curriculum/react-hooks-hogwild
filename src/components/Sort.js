import React, { useState } from 'react'

function Sort({ allHogs, setAllHogs, hogs }) {
  const [sortButtonName, setSortButtonName] = useState('Sort By Name: ON')
  const [sortButtonWeight, setSortButtonWeight] = useState('Sort By Weight: ON')

  const sortedHogs = allHogs.toSorted((a, b) => {
    const hogA = a.name
    const hogB = b.name
    if (hogA < hogB) {
      return -1
    }
    if (hogA > hogB) {
      return 1
    }
    return 0
  })

  const handleNameClick = () => {
    if(sortButtonName === 'Sort By Name: ON'){
      setAllHogs(sortedHogs)
      setSortButtonName('Sort By Name: OFF')
    } else if(sortButtonName === 'Sort By Name: OFF') {
      setAllHogs(hogs)
      setSortButtonName('Sort By Name: ON')
    }
  }

  const sortedHogsWeight = allHogs.toSorted((a, b) => {
    const hogA = a.weight
    const hogB = b.weight
    if (hogA < hogB) {
      return -1
    }
    if (hogA > hogB) {
      return 1
    }
    return 0
  })

  const handleWeightClick = () => {
    if(sortButtonWeight === 'Sort By Weight: ON'){
      setAllHogs(sortedHogsWeight)
      setSortButtonWeight('Sort By Weight: OFF')
    } else if(sortButtonWeight === 'Sort By Weight: OFF') {
      setAllHogs(hogs)
      setSortButtonWeight('Sort By Weight: ON')
    }
  }

  return (
    <>
    <button onClick={handleNameClick}>
      {sortButtonName}
    </button>
    <button onClick={handleWeightClick}>
      {sortButtonWeight}
    </button>
    </>
  )
}

export default Sort
