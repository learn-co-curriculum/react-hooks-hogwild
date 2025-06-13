import React, { useState } from "react";

const HogTile = ({ name, image, greased, weight, medal }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      className="pigTile ui four wide column"
      onClick={() => setIsClicked(!isClicked)}
    >
      <img src={image} className="minPigTile" />
      <h3>{name}</h3>
      {isClicked ? (
        <ul className="normalText">
          <li className="hoggyText">Greased: {greased ? "Yes" : "No"}</li>
          <li className="hoggyText">Weight: {weight}</li>
          <li className="hoggyText achievementText">
            Highest Medal Achieved: {medal}
          </li>
        </ul>
      ) : (
        <p>Click to see more info</p>
      )}
    </div>
  );
};

export default HogTile;
