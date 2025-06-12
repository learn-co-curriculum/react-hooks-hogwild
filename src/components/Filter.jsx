const Filter = ({ setDisplayedHogList, hogList }) => {
  const handleChange = (event) => {
    const selectedOptionValue =
      event.target.querySelector("option:checked").value;
    toggleGreasedPigs(selectedOptionValue === "show");
  };

  const toggleGreasedPigs = (showGreasedHogs) => {
    if (showGreasedHogs) {
      setDisplayedHogList([...hogList]);
    } else {
      setDisplayedHogList(hogList.filter((hog) => !hog.greased));
    }
  };

  return (
    <div className="ui container column" id="filter">
      <h2>Show Greased Pigs?</h2>
      <div className="ui form">
        <div className="field">
          <select defaultValue={"show"} onChange={handleChange}>
            <option value="show">Yes! Show Greased Pigs</option>
            <option value="hide">No! Hide Greased Pigs</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
