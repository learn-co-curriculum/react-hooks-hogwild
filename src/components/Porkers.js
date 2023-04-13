import PorkerFilter from "./PorkerFilter";
import PorkerTile from "./PorkerTile";
import { useState } from "react";

function Porkers({ hogs }) {
  console.log(hogs, "From the porkers");

  const [selectedCategory, setSelectedCategory] = useState("All");

  const onOptionSelect = (option) => {
    console.log(option);
    setSelectedCategory(option);
  };

  const greasedFilteredPigs = hogs.filter((hog) => {
    //   for all the pigs
    if (selectedCategory === "All") {
      return true;
    }
    //   for not greased
    else if (selectedCategory === "Greased") {
      return hog.greased;
    }
    // not greased
    else {
      return !hog.greased;
    }
  });

  const hogsToDisplay = greasedFilteredPigs.map((hog) => {
    return (
      <PorkerTile
        key={hog.name}
        name={hog.name}
        image={hog.image}
        weight={hog.weight}
        greased={hog.greased}
        specialty={hog.specialty}
        highestMedal={hog["highest medal achieved"]}
      />
    );
  });
  return (
    <div>
      <PorkerFilter onOptionSelect={onOptionSelect} />
      <div className="porkers">{hogsToDisplay}</div>
    </div>
  );
}

export default Porkers;
