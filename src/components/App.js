import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import HogList from './HogList';
import Filter from './Filter';
import hogs from '../porkers_data';

class App extends Component {
  render() {

    return (
      <div className="App">
          < Nav />
          < Filter />
          < HogList hogs={hogs} />
      </div>
    )
  }
}

export default App;
