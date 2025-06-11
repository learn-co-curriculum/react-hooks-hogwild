import HogCard from "./HogCard";

const HogViewer = ({ hogs }) => {
  return (
    <div className="ui grid container link">
      {hogs.map((hog, hogIndex) => (
        <HogCard key={hogIndex} hog={hog} hogIndex={hogIndex} />
      ))}
    </div>
  );
};

export default HogViewer;
