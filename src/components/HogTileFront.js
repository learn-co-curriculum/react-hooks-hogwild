

function HogTileFront({ hog }) {
    // console.log(hog)
    return (
        <div>
            <h3>{hog.name}</h3>
            <img className="minPigTile" src={hog.image} />
        </div>
    )
}

export default HogTileFront