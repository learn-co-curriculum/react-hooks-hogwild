import React from "react";

function FilterHogs({ showOnlyGreased, onToggleGreased }) {
  return (
    <div className="filterWrapper">
      <h2 className="smallHeader">
        Viewing:{" "}
        {showOnlyGreased ? "Greased Hogs Collection" : "All Hogs Collection"}
      </h2>
      <input
        type="checkbox"
        checked={showOnlyGreased}
        onChange={(e) => onToggleGreased(e.target.checked)}
      />
      Show Greased Hogs Only
    </div>
  );
}

export default FilterHogs;
