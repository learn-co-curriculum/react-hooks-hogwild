
function Filter({ changeFilter }) {

    

    return (
        <div>
            <select onChange={(e) => changeFilter(e)}>
                <option value="All">All</option>
                <option value="Greased">Greased</option>
                <option value="Not Greased">Not Greased</option>
            </select>
        </div>
    )
}

export default Filter