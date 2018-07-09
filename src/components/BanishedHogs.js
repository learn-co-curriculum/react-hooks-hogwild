import React from "react";
import BanishedHogCard from "./BanishedHogCard";

const BanishedHogs = ({ hogs }) => {
  return (
    <div className="ui grid banished">
      {hogs.map(hog => <BanishedHogCard name={hog.name} key={hog.id} />)}
    </div>
  );
};

export default BanishedHogs;
