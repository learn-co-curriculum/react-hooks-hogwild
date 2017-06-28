import React, { Component } from 'react';

import './App.css';
import Filter from './components/Filter'
import PigIndex from './components/PigIndex'
import Hogs from './porkers_data'
import Nav from './components/Nav'
import Footer from './components/Footer'



class App extends Component {

  constructor() {
    super()
    this.state = {
      allHogs: Hogs,
      sortBy: 'name',
      greasedOnly: false,
      banishedHogs:[]
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

  hideHog = (banishedHogName) => {
    const allBanishedHogs = this.state.banishedHogs
    allBanishedHogs.push(banishedHogName)

    this.setState({
      banishedHogs: allBanishedHogs
    })
  }

  getDesiredHogs = () => {
    const banished = this.state.banishedHogs
    const allowedHogs = banished.length === 0 ? Hogs : Hogs.filter((hog) => !banished.includes(hog.name.toLowerCase()))
    let desireableHogs = (this.state.greasedOnly) ? allowedHogs.filter((hog) => (hog.greased === true)) : allowedHogs
    return this.getSortedHogs(desireableHogs)
  }



  render() {
    return (
      <div className="App">
          < Nav />
          < Filter setSort={this.setSortBy} setFilter={this.toggleGreased}/>
          < PigIndex hideHog={this.hideHog} hogs={this.getDesiredHogs()}/>
          <Footer />
      </div>
    )
  }
}



export default App;
