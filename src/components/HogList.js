import React from "react";
import HogCard from "./HogCard";

function HogList({ hogs }) {
	return (
		<div className="ui grid container indexWrapper">
			{hogs.map((hog) => (
				<HogCard key={hog.name} hog={hog} />
			))}
		</div>
	);
}

export default HogList;
