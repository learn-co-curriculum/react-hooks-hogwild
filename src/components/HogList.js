import React from 'react'
import HogTile from './HogTile'

const HogList = ({ hogs, handleBanishedClick }) => {
	return (
		<div className="ui three stackable cards">
			{hogs.map(hog => (
				<HogTile
					handleBanishedClick={handleBanishedClick}
					key={hog.name}
					hog={hog}
				/>
			))}
		</div>
	)
}

export default HogList
