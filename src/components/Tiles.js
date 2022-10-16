import React, {useState} from "react"
import HogDetails from "./Details"



function Tiles({hogs}){

    const [activeHogName, setActiveHogName] = useState(null)
 
    function handleIsClicked(hogName){
        setActiveHogName((currentHogName) => currentHogName === hogName ? null : hogName)
    }
    
    const hogTiles = hogs.map((hog) => {
        const { name, image, specialty, weight, greased} = hog
        console.log(hog)
        return( 
            <div key={name}>
                <img src={image} onClick={() => handleIsClicked(name)}></img>
                <p>{name}</p>
                {activeHogName === name ? <HogDetails specialty={specialty} weight={weight} greased={greased} highestMedalAchieved={hog["highest medal achieved"]}/> : null }
            </div>
    )})
    
    
    return (
        <>
        <div>{hogTiles}</div>
        </>
    )
}

export default Tiles

