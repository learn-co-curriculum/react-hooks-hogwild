import React from "react";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortOption: "all",
      greased: false
    };
  }

  handleSelectChange = e => {
    let sort = e.target.value;
    this.setState({ sortOption: sort });
  };

  handleCheck = e => {
    this.setState({ greased: !this.state.greased });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onFilter(this.state);
  };

  render() {
    return (
      <div className="filterWrapper">
        <form onSubmit={this.handleSubmit}>
          <label>Sort By: </label>
          <select
            name="sort"
            onChange={this.handleSelectChange}
            value={this.state.sortOption}
          >
            <option value="all" />
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
          <label>Greased Pigs Only?</label>
          <input
            checked={this.state.greased}
            onChange={this.handleCheck}
            type="checkbox"
          />
          <button className="btn btn-default" type="submit">
            Filter
          </button>
        </form>
      </div>
    );
  }
}

export default Filter;
