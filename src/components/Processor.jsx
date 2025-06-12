import Filter from "./Filter";
import Sort from "./Sort";

function Processor({
  displayedHogList,
  setDisplayedHogList,
  hogList,
  setHogList,
}) {
  return (
    <div className="ui grid container">
      <Filter setDisplayedHogList={setDisplayedHogList} hogList={hogList} />
      <Sort
        setDisplayedHogList={setDisplayedHogList}
        displayedHogList={displayedHogList}
        hogList={hogList}
        setHogList={setHogList}
      />
    </div>
  );
}

export default Processor;
