import Filter from "./Filter";
import Sort from "./Sort";

function Processor({ hogListProps }) {
  return (
    <div className="ui grid container">
      <Filter hogListProps={hogListProps} />
      <Sort hogListProps={hogListProps} />
    </div>
  );
}

export default Processor;
