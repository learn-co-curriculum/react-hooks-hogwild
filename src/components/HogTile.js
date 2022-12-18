import {useState} from 'react'
import HogTileFront from './HogTileFront'
import HogTileBack from './HogTileBack'


function HogTile({ hog }) {

    const [showDetails, setShowDetails] = useState(false)

    const toggleDetails = () => {
        // console.log(hog)
        setShowDetails(!showDetails)
    }

    return (
        <div className="ui eight wide column" onClick={toggleDetails}>
            <div className="pigTile">
                {showDetails 

                ? <HogTileBack 
                specialty={hog.specialty}
                weight={hog.weight}
                greased={hog.greased}
                medal={hog["highest medal achieved"]}/>

                : <HogTileFront hog={hog}/>

                }
            </div>
        </div>
    )
}

export default HogTile