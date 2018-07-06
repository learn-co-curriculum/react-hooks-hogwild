import React from "react";
import HogDetails from "./HogDetails";

class HogTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  getImage = hogName => {
    let formattedName = hogName
      .split(" ")
      .join("_")
      .toLowerCase();
    let pigPics = require(`../hog-imgs/${formattedName}.jpg`);
    return pigPics;
  };

  handleDetailsClick = () => {
    //when clicked, change clicked to true
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    const { name } = this.props.hog;
    return (
      <div className=" ">
        <div className="ui card eight wide column pigTile">
          <div className="image">
            <img src={this.getImage(name)} alt="hogPic" />
          </div>
          <div className="content">
            <h3 className="header">{name}</h3>
            <button id="details" onClick={this.handleDetailsClick}>
              {this.state.clicked ? "Hide Details" : "More Details"}
            </button>
          </div>
          {this.state.clicked ? <HogDetails hog={this.props.hog} /> : null}
        </div>
      </div>
    );
  }
}

export default HogTile;
