import React, {useState} from "react";
import HogDetails from "./HogDetails";

function HogCard({hog}){
    const {name, image} = hog;
    let [showDetails, setShowDetails] = useState(false);

    function handleDetails() {
        setShowDetails(showDetails = !showDetails);
    }

    return (
        <div className="hogCard" onClick={handleDetails}>
            <div className="image">
                <img src={image} width="550" alt={image}/>
            </div>
            <div className="hog-content">
                <h2 className="header">{name}</h2>
            </div>
            <div className="details">
                {showDetails ? <HogDetails hog={hog} /> : null}
            </div>
        </div>
    )
}
export default HogCard;