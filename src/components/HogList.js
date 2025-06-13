import React from "react";
import HogTile from "./HogTile";

const HogList = ({ hogs }) => {
  return (
    <div>
      {hogs.map((hog) => (
        <HogTile key={hog.name} image={hog.image} name={hog.name} />
      ))}
    </div>
  );
};

export default HogList;
