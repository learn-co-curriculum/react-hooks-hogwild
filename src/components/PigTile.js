import React from 'react'

class PigTile extends React.Component{

  render(){
    return(
      <div className="pigTile">
        <div className="smallHeader">{this.props.name}</div>
        <div>{this.props.specialty}</div>
      </div>
    )
  }
}

export default PigTile
