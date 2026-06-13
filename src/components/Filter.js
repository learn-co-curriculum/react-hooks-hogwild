import React from "react";

function Filter({ filteredGreased, onFilterChange, sortBy, onSortChange }) {
	return (
		<div className="filterWrapper">
			<label>
				<input
					type="checkbox"
					checked={filteredGreased}
					onChange={(event) => onFilterChange(event.target.checked)}
				/>
				Show Greased up piggies only
			</label>
			<select
				value={sortBy}
				onChange={(event) => onSortChange(event.target.value)}
			>
				<option value="none">Sort By</option>
				<option value="name">Name</option>
				<option value="weight">Weight</option>
			</select>
		</div>
	);
}
export default Filter;
