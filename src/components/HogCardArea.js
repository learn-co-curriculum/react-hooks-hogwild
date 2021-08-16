import React from 'react'
import HogCard from './HogCard'

const HogCardArea = ({hogs, setCurrentHog}) => {
    
    return (
        <div className='hogCardArea'>
            {hogs.map(hog=>
                <HogCard key={hog.name} hog={hog} setCurrentHog={setCurrentHog}/>

            )}
        </div>
    )
}

export default HogCardArea
