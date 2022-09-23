import React from "react";

function HogDetails({hog}) {
    const {specialty, greased, weight, "highest medal achieved": medal} = hog;
    return (
        <div className = "extra-details">
            <h3 className="greased">{greased? "Greased" : "Not Greased"}</h3>
            <p>Specialty: {specialty}</p>
            <p>Highest Medal Achieved: {medal}</p>
            <p>Weight: {weight}</p>
        </div>
    )
}

export default HogDetails