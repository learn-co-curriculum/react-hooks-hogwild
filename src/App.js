import React, { Component } from 'react';
import piggy from './porco.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="TwirlyPig">
          <img src={piggy} className="App-logo" alt="piggy" />
        </div>

          <h2 className="headerText">Must Love Hogs</h2>
          <p className="normalText">A React App for County Fair Hog Fans</p></div>

    );
  }
}

export default App;
