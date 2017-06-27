import React, { Component } from 'react';
import piggy from './porco.png';
import './App.css';
import Filter from './components/Filter'
import PigIndex from './components/PigIndex'
import Hogs from './porkers_data'



class App extends Component {

  constructor() {
    super()
    this.state = {
      hogs: Hogs,
      sort: 'name',
      filtered: true
    }
  }

  setFilter = (toggledFilter) => {
    this.setState(
      {filtered: toggledFilter}
    )
  }


  setSort = (sortBy) => {
    this.setState({
      sort: sortBy
    })
  }

  sortHogs = () => {
    if (this.state.sort === 'name') {
      let sorted = Hogs.sort((a, b) => {
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0
      })
    } else if (this.state.sort === 'weight') {
      let sorted = Hogs.sort(function(a, b) {
        return b["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"] - a["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]
      })
    }
  }

  filterHogs = () => {
    if (this.state.filtered){
      let x = this.state.hogs
      let greasedOnly = x.filter((hog) => (hog.greased === true))
      this.setState({
        hogs: greasedOnly
      })
    }

  }

  render() {
    this.sortHogs()
    this.filterHogs()

    return (
      <div className="App">
        <div className="TwirlyPig">
          <img src={piggy} className="App-logo" alt="piggy" />
        </div>
          <h2 className="headerText">Must Love Hogs</h2>
          <p className="normalText">A React App for County Fair Hog Fans</p>
          < Filter setSort={this.setSort} setFilter={this.setFilter}/>
          < PigIndex hogs={this.state.hogs}/>
      </div>

    );
  }
}

export default App;
