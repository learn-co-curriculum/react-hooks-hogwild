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
      greased: false,
      sortBy: "all"
    };
  }
  handleToggleGreased = () => {
    this.setState({ greased: !this.state.greased });
  };

  handleSelectChange = e => {
    this.setState({ sortBy: e.target.value });
  };

  filterGreased = hogs => {
    if (this.state.greased) {
      return hogs.filter(hog => hog.greased);
    } else {
      return hogs;
    }
  };
  sortHogs = filtered => {
    if (this.state.sortBy === "weight") {
      return filtered.sort((a, b) => {
        b[
          "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
        ] -
          a[
            "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
          ];
      });
    } else if (this.state.sortBy === "name") {
      return filtered.sort((a, b) => {
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
      });
    } else {
      return filtered;
    }
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Filter
          handleToggleGreased={this.handleToggleGreased}
          handleSelectChange={this.handleSelectChange}
        />
        <HogList hogs={this.sortHogs(this.filterGreased(hogs))} />
      </div>
    );
  }
}

export default App;
