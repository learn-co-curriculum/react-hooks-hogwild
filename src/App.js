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
      allHogs: Hogs,
      sortBy: 'name',
      greasedOnly: false,
    }
  }

  toggleGreased = (bool) => {
    this.setState({
      greasedOnly: bool
    })
  }

  setSortBy = (key) => {
    this.setState({
      sortBy: key
    })
  }

  getSortedHogs = (pigpen) => {
    var sortedHogs = null
    if (this.state.sortBy === 'name') {
      sortedHogs = pigpen.sort((a, b) => {
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0
      })
    } else if (this.state.sortBy === 'weight') {
      sortedHogs = pigpen.sort((a, b) => {
        return b["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"] - a["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]
      })
    }
    return sortedHogs
  }

  getDesiredHogs = () => {
    let desireableHogs = (this.state.greasedOnly) ? Hogs.filter((hog) => (hog.greased === true)) : Hogs
    return this.getSortedHogs(desireableHogs)
  }

  render() {
    return (
      <div className="App">
        <div className="TwirlyPig">
          <img src={piggy} className="App-logo" alt="piggy" />
        </div>
          <h2 className="headerText">Must Love Hogs</h2>
          <p className="normalText">A React App for County Fair Hog Fans</p>
          < Filter setSort={this.setSortBy} setFilter={this.toggleGreased}/>
          < PigIndex hogs={this.getDesiredHogs()}/>
      </div>
    )
  }
}

export default App;
