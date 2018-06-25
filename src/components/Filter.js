import React from 'react';

class Filter extends React.Component {
  render() {
    return (
      <div>
        Sort By: 
        <select
            name="type"
            // value={this.state.selectedSort}
            // onChange={this.handleSelect}
          >
          <option value="name">Name (alphabetical)</option>
          <option value="weight">Weight</option>
        </select>
      </div>
    )
  }

}

export default Filter;
