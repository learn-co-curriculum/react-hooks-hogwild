import React from "react";

const Hog = ({hog, setSelectedHog, selectedHog}) => {

  const handleClick = (e) => {
    e.preventDefault()
    setSelectedHog(selectedHog===hog ? '' : hog)
  }

if(hog!==selectedHog){
	return (
    <div className='pigTile'>
		  <div id={hog.name} className='ui eight wide column' onClick={handleClick}>
        <h3>{hog.name}</h3>
        <img className='pigImg' src={hog.image}/>
		  </div>
    </div>
	)} else {
    return(
      <div className='pigTile'>
        <div id={hog.name} className='ui eight wide column' onClick={handleClick}>
        <h3>{hog.name}</h3>
        <div>
          <p>Greased: {hog.greased ? 'Yes' : 'No'}</p>
          <p>Specialty: {hog.specialty}</p>
          <p>Weight: {hog.weight}</p>
        </div>
        <img className='pigImg' src={hog.image}/>
        </div>
      </div>
    )
  }
};

export default Hog;
