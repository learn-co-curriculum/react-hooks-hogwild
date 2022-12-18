

function Sort({ changeSort }) {
    return (
        <div>
            <select onChange={(e) => changeSort(e)}>
                <option value="None">None</option>
                <option value="Name">Name</option>
                <option value="Weight">Weight</option>
            </select>
        </div>
    )
}

export default Sort