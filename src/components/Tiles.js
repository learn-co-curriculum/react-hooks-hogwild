import React, {useState} from "react"
import HogComponent from "./HogComponent"


function Tiles({hogs}){

    const [isFiltered, setIsFiltered] = useState(false)
    const [sortBy, setSortBy] = useState("weight")
    
    
    const filteredHogs = hogs.filter((hog) => {
        return isFiltered ? hog.greased === true : hog
    })

    const sortedHogs = filteredHogs.sort((hog1, hog2) => {
        if(sortBy === "name") {
            return hog1.name.localeCompare(hog2.name)

        } else {
            return hog1.weight - hog2.weight
        }
    }) 

    const hogTiles = sortedHogs.map((hog) => {
       
        return <HogComponent key={hog.name} hog={hog}/>
    })

    const toggleFilteredHogs = () => {
        setIsFiltered((isFiltered) => !isFiltered)
    }

    const handleSort = (e) => {
        setSortBy(e.target.value)
    } 
    
    return (
        <>
        <label htmlFor="sort">Sorty By:</label>
        <select id="sort" onChange={handleSort} value={sortBy}>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
        </select>
        <label htmlFor="grease-filter">Show greased only</label>
        <input id="grease-filter" type="checkbox" checked={isFiltered} onChange={toggleFilteredHogs}/>
        <div>{hogTiles}</div>
        </>
    )
}

export default Tiles

