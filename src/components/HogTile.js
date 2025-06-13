import React from "react";

const HogTile = ({ name, image }) => {
  return (
    <div className="pigTile">
      <img src={image} className="minPigTile" />
      <h3>{name}</h3>
    </div>
  );
};

export default HogTile;
