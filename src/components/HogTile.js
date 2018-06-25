import React from 'react';

class HogTile extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      clicked: false
    }
  }

  onClick = () => {
    //when clicked, change clicked to true
    this.setState({ clicked: !this.state.clicked })
  }
  showDetails = () => {
    let button = document.getElementById('details')
    button.innerText = 'Hide Details';
    return (
      <div>
        <p>Specialty: {this.props.hog.specialty}</p>
      </div>
    )
  }

  hideDetails = () => {
    let button = document.getElementById('details')
    if (button) {
      button.innerText = 'More Details'
      return ''
    }
  }
  render(){
    return (
      <div className='pigTile'>
        <h3>{this.props.hog.name}</h3>
        <button id='details' onClick={this.onClick}>More Details</button>
        {this.state.clicked ? this.showDetails() : this.hideDetails()}
      </div>
    )
  }

}


export default HogTile;
