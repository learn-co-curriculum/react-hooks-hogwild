import React, {useState} from "react";
import Hog from './Hog';

const Menu = ({ hogs, greaseFilter, sortByWeight}) => {
  const [selectedHog, setSelectedHog] = useState(false)

  const hogList = sortByWeight ?
    [...hogs].sort((a, b) => a.weight - b.weight)
    : [...hogs].sort((a, b) => a.name.localeCompare(b.name))


  const displayHogs = () =>
    greaseFilter ?
    hogList.map(hog => hog.greased ?
      <Hog key={hog.name}
        hog={hog}
        selectedHog={selectedHog}
        setSelectedHog={setSelectedHog}/> :
      '') :
      hogList.map(hog =>
        <Hog key={hog.name}
          hog={hog}
          selectedHog={selectedHog}
          setSelectedHog={setSelectedHog}/>)


	return (
		<div className="ui grid container">
      {displayHogs()}
		</div>
	);
};

export default Menu;
