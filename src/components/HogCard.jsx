import HogDetails from "./HogDetails";

const HogCard = ({ hog, hogIndex, hogListProps }) => {
  const { displayedHogList, setDisplayedHogList, hogList, setHogList } =
    hogListProps;
  const toggleHideHogDetails = (hogInd) => {
    const hogDetailSection = document.querySelector(`#hog-details-${hogInd}`);
    if (hogDetailSection.hidden === true) hogDetailSection.hidden = false;
    else hogDetailSection.hidden = true;
  };

  const hideHog = (hogToHide) => {
    setDisplayedHogList(
      displayedHogList.filter(
        (h) =>
          Object.keys(h).length === Object.keys(hogToHide).length &&
          !Object.entries(h).every(
            ([key, value]) =>
              hogToHide.hasOwnProperty(key) && hogToHide[key] === value
          )
      )
    );
    setHogList(
      hogList.filter(
        (h) =>
          Object.keys(h).length === Object.keys(hogToHide).length &&
          !Object.entries(h).every(
            ([key, value]) =>
              hogToHide.hasOwnProperty(key) && hogToHide[key] === value
          )
      )
    );
  };

  return (
    <div
      className="ui eight wide column"
      onClick={() => toggleHideHogDetails(hogIndex)}
      id={`hog-card-${hogIndex}`}
    >
      <div className="ui card column centered">
        <div className="content">
          <img
            className="ui image"
            src={hog.image}
            style={{ height: "200px", objectFit: "cover" }}
          />
        </div>
        <div className="content">
          <h2>
            {hog.name}
            <a>
              <i
                onClick={() => hideHog(hog)}
                className="right floated eye slash outline icon"
              ></i>
            </a>
          </h2>
        </div>
        <HogDetails
          hog={hog}
          hogIndex={hogIndex}
          setDisplayedHogList={setDisplayedHogList}
        />
      </div>
    </div>
  );
};

export default HogCard;
