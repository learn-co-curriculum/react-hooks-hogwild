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
    console.log('wot')
    return `/public/hog-imgs/${sluggedName}`
  }

  render() {
    let style = {backgroundImage: "url('../../public/hog-imgs/cherub.jpg')"}
    if (this.state.clicked) {
      return (
        <div className="pigTile" onClick={this.handleClick} style={style}>
          {this.props.name}
          <ul>
            <li className="normalText">{this.props.specialty} specialist</li>
            <li className="normalText">weighs {this.props.weight} refrigerators</li>
            <li className="normalText">{this.props.medal} medal achieved</li>
          </ul>
        </div>
      )
    } else {
      return (
        <div className="pigTile" onClick={this.handleClick} style={style}>
          <div className="smallHeader">{this.props.name}</div>
          <div>{this.props.specialty}</div>
        </div>
      )
    }
  }
}

export default PigTile
