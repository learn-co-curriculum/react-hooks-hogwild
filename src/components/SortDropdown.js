import React from "react";

const SortDropdown = ({ handleSort }) => {
	const handleChange = (e) => handleSort(e.target.value)

	return (
		<select name="sort" onChange={handleChange}>
			<option value="">Sort</option>
			<option value="name">Name</option>
			<option value="weight">Weight</option>
		</select>
	)
}

export default SortDropdown;
