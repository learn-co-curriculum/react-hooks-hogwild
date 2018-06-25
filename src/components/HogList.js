import React from 'react';
import HogTile from './HogTile';

class HogList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      filter: null,
      sort: null
    };
  }

  render() {
    let hogs = this.props.hogs
    return (
      <div>
        {hogs.map(hog => < HogTile key={hog.name} hog={hog} /> )}
      </div>
    );
  }
}


export default HogList;
