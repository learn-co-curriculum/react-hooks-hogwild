const Sort = ({ sortHogListsFromEvent }) => {
  return (
    <div className="ui container column" id="sort">
      <h2>Sort By</h2>
      <div className="ui form">
        <div className="field">
          <select defaultValue={""} onChange={sortHogListsFromEvent}>
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
