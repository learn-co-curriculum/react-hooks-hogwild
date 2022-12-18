

function HogTileBack({ specialty, weight, greased, medal }) {
    // console.log(typeof(greased))

    return (
        <div className="hoggyText">
            <ul>
                <li>Specialty: {specialty}</li>
                <li>Weight: {weight} lbs</li>
                <li>Medal: {medal}</li>
                <li>Greased: {greased.toString()}</li>
            </ul>
        </div>
    )
}

export default HogTileBack