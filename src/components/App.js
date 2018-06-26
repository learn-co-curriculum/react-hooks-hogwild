import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import HogList from "./HogList";
import Filter from "./Filter";
import hogs from "../porkers_data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hogs: hogs,
      filters: null
    };
  }

  handleFilters = filterOptions => {
    this.setState({
      ...this.state,
      filters: {
        sortBy: filterOptions.sortOption,
        greased: filterOptions.greased
      }
    });
    this.filterHogs();
  };

  filterHogs = () => {
    let filteredHogs = this.state.hogs;
    if (!this.state.filters) {
      return filteredHogs;
    }
    if (this.state.filters.greased) {
      filteredHogs = filteredHogs.filter(hog => hog.greased);
    }
    if (this.state.filters.sortBy === "name") {
      filteredHogs = filteredHogs.sort((a, b) => {
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
      });
    } else if (this.state.filters.sortBy === "weight") {
      filteredHogs = filteredHogs.sort((a, b) => {
        return (
          b[
            "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
          ] -
          a[
            "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
          ]
        );
      });
    }
    return filteredHogs;
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Filter onFilter={this.handleFilters} />
        <HogList hogs={this.filterHogs()} />
      </div>
    );
  }
}

export default App;
