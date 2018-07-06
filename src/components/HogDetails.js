import React from "react";

const HogDetails = ({ hog }) => {
  const { greased } = hog;
  const medal = hog["highest medal achieved"];
  const weight =
    hog[
      "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
    ];
  return (
    <div className="description">
      <strong>{greased ? "Greased" : "Nongreased"}</strong>
      <p>
        Highest medal achived: <strong>{medal}</strong>
      </p>
      <p>
        Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator
        with Thru-the-Door Ice and Water: <strong>{weight}</strong>
      </p>
    </div>
  );
};

export default HogDetails;
