import React from 'react'

class Filter extends React.Component{

  constructor(){
    super()
    this.state = {
      selectedSort: 'all',
      greasedOnly: true
    }
  }

  handleSelect = (event) => {
    const value = event.target.value
    this.setState({
      selectedSort: value
    })
    this.props.setSort(value)
  }

  handleCheck = () => {
    const newState = !this.state.greasedOnly
    this.setState({
      greasedOnly: newState
    })
    this.props.setFilter(newState)
  }


  render(){
    return (
      <div>
      <form>
      <label>
        greased hogs only
        <input
            name="greased"
            type="checkbox"
            checked={this.state.greasedOnly}
            onChange={this.handleCheck} />
        </label>

        <select
          name="type"
          value={this.state.selectedSort}
          onChange={this.handleSelect}
        >
        <option value="name">Name (alphabetical)</option>
        <option value="weight">Weight</option>
        </select>

        </form>
      </div>
    )
  }
}

export default Filter
