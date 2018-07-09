import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import HogList from "./HogList";
import Filter from "./Filter";
import BanishedHogs from "./BanishedHogs";
import hogs from "../porkers_data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greased: false,
      sortBy: "",
      banished: [],
      showBanished: false
    };
  }
  showHiddenHogs = () => {
    this.setState({ showBanished: !this.state.showBanished });
  };

  banishHog = hog => {
    this.setState({ banished: [...this.state.banished, hog] });
  };

  handleToggleGreased = () => {
    this.setState({ greased: !this.state.greased });
  };

  handleSelectChange = e => {
    this.setState({ sortBy: e.target.value });
  };

  filterBanished = () => {
    if (this.state.banished.length > 0) {
      return hogs.filter(hog => {
        return this.state.banished.indexOf(hog) === -1;
      });
    } else {
      return hogs;
    }
  };

  filterGreased = () => {
    let unbanishedHogs = this.filterBanished();
    if (this.state.greased) {
      return unbanishedHogs.filter(hog => hog.greased);
    } else {
      return unbanishedHogs;
    }
  };

  sortHogs = () => {
    let previouslyFiltered = this.filterGreased();
    switch (this.state.sortBy) {
      case "weight":
        return previouslyFiltered.sort((a, b) => {
          return (
            b[
              "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
            ] -
            a[
              "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
            ]
          );
        });
      case "name":
        return previouslyFiltered.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      default:
        return previouslyFiltered;
    }
  };

  render() {
    return (
      <div className="ui grid container App">
        <div className="sixteen wide column centered">
          <Nav />
        </div>
        <div className="sixteen wide column centered">
          <Filter
            handleToggleGreased={this.handleToggleGreased}
            handleSelectChange={this.handleSelectChange}
            showBanished={this.showHiddenHogs}
          />
        </div>
        <div className="fourteen wide column centered">
          {this.state.showBanished ? (
            <BanishedHogs fetchGIF={this.fetchGIF} hogs={this.state.banished} />
          ) : null}
        </div>
        <br />
        <div className="centered">
          <HogList
            handleBanishedClick={this.banishHog}
            hogs={this.sortHogs()}
          />
        </div>
      </div>
    );
  }
}

export default App;
