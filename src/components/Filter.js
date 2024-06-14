import React, { useState } from 'react'

function Filter({ allHogs, setAllHogs, hogs }) {
  const [buttonText, setButtonText] = useState('Greased Hogs: ON')

  const handleClick = () => {
    const greasedHogs = allHogs.filter((hog) => hog.greased === true)

    if(buttonText === 'Greased Hogs: ON'){
      setAllHogs(greasedHogs)
      setButtonText('Greased Hogs: OFF')
    } else if(buttonText === 'Greased Hogs: OFF') {
      setAllHogs(hogs)
      setButtonText('Greased Hogs: ON')
    }
  }

  return (
    <>
    <button onClick={handleClick}>
      {buttonText}
    </button>
    </>
  )
}

export default Filter
