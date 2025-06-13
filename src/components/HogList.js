import React from "react";
import HogTile from "./HogTile";

const HogList = ({ hogs }) => {
  return (
    <div className="ui grid container">
      {hogs.map((hog) => (
        <HogTile
          key={hog.name}
          image={hog.image}
          name={hog.name}
          greased={hog.greased}
          weight={hog.weight}
          medal={hog["highest medal achieved"]}
        />
      ))}
    </div>
  );
};

export default HogList;
