import React from 'react'

class PigTile extends React.Component{
  constructor(){
    super()
    this.state = {
      clicked: false
    }
  }
  handleClick = () => {
    let toggledClick = !this.state.clicked
    this.setState({
      clicked: toggledClick
    })
  }

  render(){
    if (this.state.clicked)
      { return (
        <div className="pigTile" onClick={this.handleClick}>
          {this.props.name}
          <ul>
          <li className="normalText">{this.props.specialty} specialist</li>
          <li className="normalText">weighs {this.props.weight} refrigerators</li>
          <li className="normalText">{this.props.medal} medal achieved</li>
          </ul>
        </div>
      )
      }
    else {
    return (
      <div className="pigTile" onClick={this.handleClick}>
        <div className="smallHeader">{this.props.name}</div>
        <div>{this.props.specialty}</div>
      </div>
      )
    }
  }
}

export default PigTile
