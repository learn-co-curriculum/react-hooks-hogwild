const Sort = ({ setDisplayedHogList, displayedHogList }) => {
  const handleChange = (event) => {
    const sortBy = event.target.value;
    let sortedList = [...displayedHogList];
    if (sortBy === "name") {
      sortedList.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "weight") {
      sortedList.sort((a, b) => a.weight - b.weight);
    } else {
      sortedList = [...displayedHogList];
    }
    setDisplayedHogList(sortedList);
  };
  return (
    <div className="ui container column" id="sort">
      <h2>Sort By</h2>
      <div className="ui form">
        <div className="field">
          <select defaultValue={""} onChange={handleChange}>
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
