import React from 'react'

function Filter({
  sortBy,
  onChangeSortBy,
  showGreased,
  onChangeShowGreased
}) {

  function handleChangeSortBy(event) {
    onChangeSortBy(event.target.value)
  }
  
  function handleToggleGreased(event) {
    onChangeShowGreased(event.target.checked)
  }

	return (
		<div className="filterWrapper">
			<div className="ui menu">
				<div className="ui item">
					<label>Sort by </label>
				</div>
				<div className="ui item">
					<select
						className="ui selection dropdown"
						name="sort"
						onChange={handleChangeSortBy}
						value={sortBy}
          >
						<option value="name">Name</option>
						<option value="weight">Weight</option>
					</select>
				</div>
				<div className="ui item">
					<label>Greased Pigs Only?</label>
				</div>
				<div className="ui item">
					<input
						className="ui toggle checkbox"
						checked={showGreased}
						onChange={handleToggleGreased}
						type="checkbox"
					/>
				</div>
			</div>
		</div>
	)
}

export default Filter