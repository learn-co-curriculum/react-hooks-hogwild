import HogCard from "./HogCard";

const HogViewer = ({ displayedHogList }) => {
  return (
    <div className="ui grid container link">
      {displayedHogList.map((hog, hogIndex) => (
        <HogCard key={hogIndex} hog={hog} hogIndex={hogIndex} />
      ))}
    </div>
  );
};

export default HogViewer;
