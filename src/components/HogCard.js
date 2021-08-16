import React from 'react'


const HogCard = ({hog, setCurrentHog}) => {
    return (
        <div onClick={() =>{setCurrentHog(hog)}} className='pigTile'>
            <img src={hog.image} alt='a hog'/>
            <h3 className='name'>{hog.name}</h3>
            
        </div>
    )
}

export default HogCard
