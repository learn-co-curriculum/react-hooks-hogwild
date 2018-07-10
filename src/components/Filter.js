import React from 'react'

const Filter = ({
  handleSelectChange,
  sortBy,
  greased,
  handleToggleGreased,
  showBanished
}) => {
	return (
		<div className="filterWrapper">
			<div className="ui menu">
				<div className="item">
					<label>Sort by </label>
				</div>
				<div className="ui item">
					<select
						className="ui selection dropdown"
						name="sort"
						onChange={handleSelectChange}
						value={sortBy}>
						<option value="name">Name</option>
						<option value="weight">Weight</option>
					</select>
				</div>
				<div className="item">
					<label>Greased Pigs Only?</label>
				</div>
				<div className="item">
					<input
						className="ui toggle checkbox"
						checked={greased}
						onChange={handleToggleGreased}
						type="checkbox"
					/>
				</div>
				<div className="ui right menu">
					<div className="item">
						<button
							className="ui blue basic button compact"
							onClick={showBanished}>
							Hidden Hogs
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Filter
