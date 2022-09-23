import React from "react";
import HogCard from "./HogCard";

function HogList({hogs}){
    return (
        <div>
            Hello
            {hogs.map(hog => (
            <HogCard key = {hog.name} hog = {hog}/>
            ))}
        </div>
    )
    
}

export default HogList;
