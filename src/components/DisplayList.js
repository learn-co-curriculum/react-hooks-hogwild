import React from "react";
import HogCards from "./HogCards";

function DisplayList({ hogs }) {
  return (
    <section className="indexWrapper" aria-label="Hog Catalog Grid">
      {hogs.map((hog) => (
        <HogCards key={hog.name} hog={hog} />
      ))}
    </section>
  );
}

export default DisplayList;
