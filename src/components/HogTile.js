import React from "react";

function HogTile({hog, selected, onSelectHog, onHideHog}) {
  function handleClick(e) {
    const clickedHog = e.target.closest('.pigTile')
    if(clickedHog.dataset.selected == 'true') {
      clickedHog.dataset.selected = 'false'
      clickedHog.className = "maxPigTile pigTile"
      onSelectHog(0)
    } else {
      clickedHog.dataset.selected = 'true'
      clickedHog.className = "minPigTile pigTile"
      onSelectHog(hog.id)
    }
  }

  return (
  <div className={`${selected ? "maxPigTile" : "minPigTile"} pigTile`} onClick={handleClick} data-selected={selected}>
    <img src={hog.image}/>
    <h3>{hog.name}</h3>
    {selected ? (
      <div className="piggyDetails">
        <p><b>Weight: </b>{hog.weight}</p>
        <p><b>Specialty: </b>{hog.specialty}</p>
        <p><b>Greased: </b>{hog.greased ? "Yes" : "No"}</p>
        <p><b>Height Medal: </b>{hog["highest medal achieved"]}</p>
        <button className="sortBtn" onClick={e => {e.stopPropagation(); onHideHog(e)}}>Hide Pig</button>
      </div>) : null}
  </div>)
}

export default HogTile