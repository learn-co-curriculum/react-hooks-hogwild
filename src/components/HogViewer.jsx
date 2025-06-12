import HogCard from "./HogCard";

const HogViewer = ({ hogListProps }) => {
  return (
    <div className="ui grid container cards link centered">
      {hogListProps.displayedHogList.map((hog, hogIndex) => (
        <HogCard
          key={hogIndex}
          hog={hog}
          hogIndex={hogIndex}
          hogListProps={hogListProps}
        />
      ))}
    </div>
  );
};

export default HogViewer;
