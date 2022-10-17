import React, { useState } from "react"
import HogDetails from "./Details"


 const HogComponent = ({hog}) => {
    const [isClicked, setIsClicked] = useState(false)
    const [isHidden, setIsHidden] = useState(false)

    const { name, image, specialty, weight, greased} = hog

    const handleHideCLick = () => {
        setIsHidden((isHidden) => !isHidden)
    }

    const handleIsClicked = () => {
        setIsClicked((isClicked) => !isClicked)
    }

    return (
        <div>
            <button type="button" onClick={handleHideCLick}>{isHidden ? `Show ${hog.name}` : `Hide ${hog.name}`}</button>
            {isHidden ? null : 
            <>
            <img src={image} alt={name} onClick={handleIsClicked}/>
            <p>{name}</p>
            {isClicked ? <HogDetails specialty={specialty} weight={weight} greased={greased} highestMedalAchieved={hog["highest medal achieved"]}/> : null }
            </>
            }
        </div>
    )
}

export default HogComponent