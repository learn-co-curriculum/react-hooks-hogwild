import React from "react";
import hogs from "../porkers_data";


function Card(props){
//console.log(props)
return(
    <div>
        <image src={hogs.image}></image>
        <h2>{hogs.name}</h2>
    </div>
    
)
}
//console.log(Card)
export default Card;
