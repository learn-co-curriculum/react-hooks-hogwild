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

  getImgUrl = () => {
    let sluggedName = (this.props.name.replace(/\s/g, '_')).toLowerCase()
    let hogImg = require(`../hog-imgs/${sluggedName}.jpg`)
    return {backgroundImage: `url(${hogImg})`}
  }
  
  handleHide = (event) => {
    const banishedHogName = event.target.id
    this.props.hideHog(banishedHogName)

  }

  render() {
    let style = this.getImgUrl()
    if (this.state.clicked) {
      return (
        <div className="maxPigTile pigTile" onClick={this.handleClick}>
          <div className="maxBackgroundSneak" style={style}></div>
            <ul>
              <li className="largeHeader">{this.props.name}</li>
              <li className="headerText">{this.props.specialty} specialist</li>
              <li className="hoggyText">weighs {this.props.weight} refrigerators</li>
              <li className="achievementText">{this.props.medal} medal achieved</li>
            </ul>
          </div>
          <span className="subtleText" id={this.props.name} onClick={this.handleHide}>hide {this.props.name}</span>
        </div>
      )
    } else {
      return (
        <div className="minPigTile pigTile" onClick={this.handleClick}>
          <div className="minBackgroundSneak" style={style}></div>
            <div className="smallHeader">{this.props.name}</div>
            <div className="normalText">weighing in at {this.props.weight} fridges</div>
            <h3>{this.props.specialty}</h3>
        <div className="pigTile" onClick={this.handleClick}>
          <div className="smallHeader">{this.props.name}</div>
        </div>
      )
    }
  }
}

export default PigTile
