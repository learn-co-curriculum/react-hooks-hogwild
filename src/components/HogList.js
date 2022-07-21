import React, { useState } from "react";
import HogCard from "./HogCard";

function HogList(props) { 
    const hogElements = props.hogsData.map((hogObj) => {
        return <HogCard hog = {hogObj} />
    })
    return (
        <div>{hogElements}</div>
    )
}

export default HogList;