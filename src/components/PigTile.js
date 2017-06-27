import React from 'react'

class PigTile extends React.Component{

  render(){
    return(
      <div>
        <span className="smallHeader">{this.props.name}</span>
        <span>, {this.props.specialty}</span>
        <div>{this.props.weight} fridges </div>

      </div>
    )
  }
}

export default PigTile
