import React, { useState } from 'react'

function HideHogs({ setAllHogs, hogs }) {
  const [buttonText, setButtonText] = useState('HIDE HOGS')

  const handleClick = () => {
    if(buttonText === 'HIDE HOGS'){
      setAllHogs([])
      setButtonText('SHOW HOGS')
    } else if(buttonText === 'SHOW HOGS') {
      setAllHogs(hogs)
      setButtonText('HIDE HOGS')
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

export default HideHogs
