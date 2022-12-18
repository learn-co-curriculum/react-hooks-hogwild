import HogTile from "./HogTile"
import {useState} from 'react'

function HogsContainer({ hogs }) {
    // console.log(hogs)

    const renderHogTiles = hogs.map((hog, index) => {
        return (
        <HogTile 
            hog={hog}
            key={index}
        />
        )
    })


    return (
        <div className="ui grid container">
            {renderHogTiles}
        </div>
    )
}

export default HogsContainer