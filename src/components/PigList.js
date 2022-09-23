import React from 'react';
import hogs from '../porkers_data'


function renderPigCard() {
    return(
        hogs.map(hogs => (
            <PigTile
            key={hogs.name}
            {hogs.name}
            {hogs.image}
            />
        ))
    )
}

function PigList() {
    return (
        <section>
            <h2>Pigs</h2>
            <ul className="cards">
                {renderPigCard}
            </ul>
        </section>
    )
}

console.log(Hogs)

export default PigList;