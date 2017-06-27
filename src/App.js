import React, { Component } from 'react';
import piggy from './porco.png';
import './App.css';
import Filter from './components/Filter'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="TwirlyPig">
          <img src={piggy} className="App-logo" alt="piggy" />
        </div>

          <h2 className="headerText">Must Love Hogs</h2>
          <p className="normalText">A React App for County Fair Hog Fans</p>
          < Filter />
          </div>

    );
  }
}

export default App;
