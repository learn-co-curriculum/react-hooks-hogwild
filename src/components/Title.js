import { React, useState } from 'react';

function Title({ name, image, specialty, greased, weight, highest_medal }){
    const [isClick, setClick] = useState(false)
    function handeClick(){
        return setClick(true)
    }

    return (
        <div>
            <h1 onClick={handeClick}>{name}</h1>
            {isClick ? <div><p>Speciatly: {specialty}</p><p>Greased: {greased ? "yes" : "no"}</p><p>Weight: {weight}</p><p>Highest medal: {highest_medal}</p></div> : null}
            <img src={image} alt={name}></img>
        </div>
    )
}

export default Title