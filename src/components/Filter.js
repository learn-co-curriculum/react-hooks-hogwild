import React from 'react'

class Filter extends React.Component{

  constructor(){
    super()
    this.state = {
      selectedFilter: 'all'
    }
  }

  handleSelect = (event) => {
    const value = event.target.value
    console.log(event.target.value)
    this.setState({
      selectedFilter: value
    })
  }

  render(){
    return (
      <div>
        <select
          name="type"
          value={this.state.selectedFilter}
          onChange={this.handleSelect}
        >
        <option value="all">All Hogs</option>
        <option value="greased">Greased Hogs</option>
        <option value="pink">Pink Hogs</option>


        </select>

      </div>
    )
  }
}

export default Filter
