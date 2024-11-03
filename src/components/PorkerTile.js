import { useState } from "react";

function PorkerTile({ name, image, weight, specialties, greased, highestMedal }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    console.log("Clicked", name);
    setIsClicked(!isClicked);
  };

  return (
    <div onClick={handleClick} className="pigTile">
      <h3>{name}</h3>
      <img width={250} src={image} alt={name} />
      {isClicked && (
        <div>
          <p>Weight: {weight}</p>
          <p>Specialties: {specialties}</p>
          <p>Highest medal achieved: {highestMedal}</p>
          <p>{greased ? "Greased" : ""}</p>
        </div>
      )}
    </div>
  );
}

export default PorkerTile;
