import React, { useState } from "react";

const HogTile = ({ hog, handleHideHog }) => {
	const [showDetails, setShowDetails] = useState(false)
	const handleShowDetails = () => setShowDetails(!showDetails)	
	
	return (
		<div key={hog.name} className="ui card" >
			<div className="image">
				<img onClick={handleShowDetails} src={hog.image}/>
			</div>
			<div className="content">
				<p className="header">{hog.name}</p>
				{showDetails ? 
					<div className="meta">
						<span>Specialty: {hog.specialty}</span><br/>
						<span>Weight: {hog.weight}</span><br/> 
						<span>{hog.greased ? 'Greased' : 'Not Greased'}</span><br/> 
						<span>
							<i className="certificate icon"></i>
							{hog["highest medal achieved"]}
						</span>
					</div>  
				: null}
				<button className="ui button" onClick={() => handleHideHog(hog.name)}>Hide This Hog!</button>
			</div>
		</div>
	)
}

export default HogTile;
