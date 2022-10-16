


const HogDetails = ({specialty, weight, greased, highestMedalAchieved}) => {

    return(
        <ul>
            <li>Specialty: {specialty}</li>
            <li>Weight: {weight}</li> 
            <li>Greased: {greased.toString()}</li>
            <li>Highest Medal Achieved: {highestMedalAchieved}</li>
        </ul>
    )
}



export default HogDetails