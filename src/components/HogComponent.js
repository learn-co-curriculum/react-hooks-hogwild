import React, { useState } from "react"
import HogDetails from "./Details"


 const HogComponent = ({hog}) => {
    const [isClicked, setIsClicked] = useState(false)

    const { name, image, specialty, weight, greased} = hog
    const handleIsClicked = () => {
        setIsClicked((isClicked) => !isClicked)
    }

    return (
        <div>
            <img src={image} alt={name} onClick={handleIsClicked}/>
            <p>{name}</p>
            {isClicked ? <HogDetails specialty={specialty} weight={weight} greased={greased} highestMedalAchieved={hog["highest medal achieved"]}/> : null }
        </div>
    )
}

export default HogComponent