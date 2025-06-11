const HogDetails = ({ hog, hogIndex }) => {
  const { specialty, weight, greased } = hog;
  const highestMedalAchieved = hog["highest medal achieved"];
  return (
    <div
      className="extra content left aligned"
      hidden={true}
      id={`hog-details-${hogIndex}`}
    >
      <p>
        <strong>Specialty: </strong>
        {specialty}
      </p>
      <p>
        <strong>Weight: </strong>
        {weight} lbs
      </p>
      <p>
        <strong>Greased: </strong>
        {greased ? "Yes!" : "No!"}
      </p>
      <p>
        <strong>Highest Medal Achieved: </strong>
        {highestMedalAchieved}
      </p>
    </div>
  );
};

export default HogDetails;
