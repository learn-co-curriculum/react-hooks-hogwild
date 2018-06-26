import React from "react";

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

  handleOnClick = () => {
    //when clicked, change clicked to true
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div className="ui card eight wide column">
        <div className="image">
          <img src={this.getImage(this.props.hog.name)} />
        </div>
        <div className="content">
          <h3 className="header">{this.props.hog.name}</h3>
          <div className="meta">
            <button id="details" onClick={this.handleOnClick}>
              {this.state.clicked ? "Hide Details" : "More Details"}
            </button>
          </div>
          {this.state.clicked ? (
            <div className="description">
              <p>Specialty: {this.props.hog.specialty}</p>
              <p>
                weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door
                Refrigerator with Thru-the-Door Ice and Water:{" "}
                {
                  this.props.hog[
                    "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
                  ]
                }{" "}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default HogTile;
