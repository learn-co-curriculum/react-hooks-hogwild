

function HogCard(props) {
    console.log(props)
    return (
        
        <div>
             <h3>{props.hog.name}</h3>
             <img src={props.hog.image} alt='piggy' />
        </div>
    )
}

export default HogCard;