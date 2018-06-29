import React from "react";

const HogDetails = ({ specialty, medal, weight }) => {
  return (
    <div className="meta">
      <p>Specialty: {specialty}</p>
      <p>Highest medal achived: {medal}</p>
      <p>
        weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator
        with Thru-the-Door Ice and Water:
        {weight}
      </p>
    </div>
  );
};

export default HogDetails;
