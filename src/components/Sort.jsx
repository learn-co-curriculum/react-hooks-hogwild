const Sort = ({
  setDisplayedHogList,
  displayedHogList,
  setHogList,
  hogList,
}) => {
  const sortHogLists = (event) => {
    const sortBy = event.target.value;
    let sortedDisplayList = [...displayedHogList];
    let sortedList = [...hogList];
    if (sortBy === "name") {
      sortedDisplayList.sort((a, b) => a.name.localeCompare(b.name));
      sortedList.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "weight") {
      sortedDisplayList.sort((a, b) => a.weight - b.weight);
      sortedList.sort((a, b) => a.weight - b.weight);
    } else {
      sortedDisplayList = [...displayedHogList];
      sortedList = [...hogList];
    }
    setDisplayedHogList(sortedDisplayList);
    setHogList(sortedList);
  };
  return (
    <div className="ui container column" id="sort">
      <h2>Sort By</h2>
      <div className="ui form">
        <div className="field">
          <select defaultValue={""} onChange={sortHogLists}>
            <option value="">Default</option>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Sort;
