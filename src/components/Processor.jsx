import Filter from "./Filter";
import Sort from "./Sort";

function Processor({ displayedHogList, setDisplayedHogList, hogList }) {
  return (
    <div className="ui grid container">
      <Filter
        setDisplayedHogList={setDisplayedHogList}
        hogList={hogList}
      />
      <Sort
        setDisplayedHogList={setDisplayedHogList}
        displayedHogList={displayedHogList}
        hogList={hogList}
      />
    </div>
  );
}

export default Processor;
