import React from "react";
import HogTile from "./HogTile";

const HogList = ({ hogs }) => {
  return (
    <div className="ui grid container">
      <br />
      <br />
      {hogs.map(hog => <HogTile key={hog.name} hog={hog} />)}
    </div>
  );
};

export default HogList;
