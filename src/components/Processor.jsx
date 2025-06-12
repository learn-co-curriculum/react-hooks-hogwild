import Filter from "./Filter";
import Sort from "./Sort";

function Processor({ hogListProps, sortHogListsFromEvent }) {
  return (
    <div className="ui grid container">
      <Filter hogListProps={hogListProps} />
      <Sort sortHogListsFromEvent={sortHogListsFromEvent} />
    </div>
  );
}

export default Processor;
