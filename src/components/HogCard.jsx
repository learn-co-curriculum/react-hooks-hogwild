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
        (hog) =>
          Object.keys(hog).length === Object.keys(hogToHide).length &&
          !Object.entries(hog).every(
            ([key, value]) =>
              hogToHide.hasOwnProperty(key) && hogToHide[key] === value
          )
      )
    );
    setHogList(
      hogList.filter(
        (hog) =>
          Object.keys(hog).length === Object.keys(hogToHide).length &&
          !Object.entries(hog).every(
            ([key, value]) =>
              hogToHide.hasOwnProperty(key) && hogToHide[key] === value
          )
      )
    );
  };

  return (
    <div className="ui five wide column" id={`hog-card-${hogIndex}`}>
      <div className="ui card column">
        <div
          className="content"
          style={{ display: "flex", justifyContent: "center" }}
          onClick={() => toggleHideHogDetails(hogIndex)}
        >
          <img
            className="ui image"
            src={hog.image}
            style={{ height: "200px", objectFit: "cover" }}
            alt={hog.name}
          />
        </div>
        <div
          className="content"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <h2>
            <span style={{ padding: "1em" }}>{hog.name}</span>
            <a>
              <i
                onClick={() => {
                  hideHog(hog);
                }}
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
