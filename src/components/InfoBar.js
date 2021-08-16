import React from 'react'

const InfoBar = ({hog}) => {
    const{greased, weight, specialty } = hog
    const medal = hog['highest medal achieved']


    return (
        <div>
            <p>{greased ? 'Greased': 'Not Greased'}</p>
            <p>{weight} lbs</p>
            <p>Highest Medal Achieved: {medal}</p>
            <p>Specialty: {specialty}</p>
            
        </div>
    )
}

export default InfoBar
