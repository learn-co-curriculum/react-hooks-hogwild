import React, {useState} from "react"
import HogComponent from "./HogComponent"
import SortHogs from "./Sort"


function Tiles({hogs}){

    const [isFiltered, setIsFiltered] = useState(false)

    const filteredHogs = hogs.filter((hog) => {
        return isFiltered ? hog.greased : hog
    })

    const hogTiles = filteredHogs.map((hog) => {
       
        return <HogComponent key={hog.name} hog={hog}/>
    })

    const toggleFilterdHogs = () => {
        setIsFiltered((isFiltered) => !isFiltered)
    }
    
    return (
        <>
        <input type="text"/>
        <label htmlFor="grease-filter">Show greased only</label>
        <input id="grease-filter" type="checkbox" value={isFiltered} onChange={toggleFilterdHogs}/>
        <div>{hogTiles}</div>
        </>
    )
}

export default Tiles

