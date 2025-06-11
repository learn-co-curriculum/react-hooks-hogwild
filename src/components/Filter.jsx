const Filter = ({ hogList }) => {
  const handleChange = (event) => {
    const selectedOptionValue =
      event.target.querySelector("option:checked").value;
    toggleGreasedPigs(selectedOptionValue === "show");
  };

  const toggleGreasedPigs = (showGreasedHogs) => {
    hogList.forEach((hog, index) => {
      if (showGreasedHogs) {
        const hogCard = document.querySelector(`#hog-card-${index}`);
        hogCard.style.display = "";
      } else {
        if (hog.greased) {
          const hogCard = document.querySelector(`#hog-card-${index}`);
          hogCard.style.display = "none";
        }
      }
    });
  };

  return (
    <div className="ui container" id="filter">
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
