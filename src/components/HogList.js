import React from "react";
import HogTile from "./HogTile";

const HogList = ({ hogs }) => {
  return (
    <div className="ui three stackable cards">
      {hogs.map(hog => <HogTile key={hog.name} hog={hog} />)}
    </div>
  );
};

export default HogList;
