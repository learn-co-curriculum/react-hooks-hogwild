import React, { useState } from "react";

function HogCard({ hog }) {
	const [showDetails, setShowDetails] = useState(false);

	return (
		<div className="ui eight wide column">
			<div
				className={`pigTile ${showDetails ? "maxPigTile" : "minPigTile"}`}
				onClick={() => setShowDetails(!showDetails)}
			>
				<h3 className="hoggyText">{hog.name}</h3>
				<img
					src={hog.image}
					alt={hog.name}
					style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }}
				/>
				{showDetails && (
					<div>
						<p>Specialty: {hog.specialty}</p>
						<p>Weight: {hog.weight}</p>
						<p>Greased: {hog.greased ? "Yes" : "No"}</p>
						<p className="achievementText">
							Highest Medal: {hog["highest medal achieved"]}
						</p>
					</div>
				)}
			</div>
		</div>
	);
}


export default HogCard;
