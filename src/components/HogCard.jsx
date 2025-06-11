import HogDetails from "./HogDetails";

const HogCard = ({ hog, hogIndex }) => {
  const toggleHideHogDetails = (hogId) => {
    const hogDetailSection = document.querySelector(`#hog-details-${hogId}`);
    if (hogDetailSection.hidden === true) hogDetailSection.hidden = false;
    else hogDetailSection.hidden = true;
  };

  return (
    <div
      className="ui eight wide column"
      onClick={() => toggleHideHogDetails(hogIndex)}
    >
      <div className="ui card">
        <div className="content">
          <img
            className="ui image"
            src={hog.image}
            style={{ height: "200px", objectFit: "cover" }}
          />
        </div>
        <div className="content">
          <h2>{hog.name}</h2>
        </div>
        <HogDetails hog={hog} hogIndex={hogIndex} />
      </div>
    </div>
  );
};

export default HogCard;
