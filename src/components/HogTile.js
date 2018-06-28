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

  handleDetailsClick = () => {
    //when clicked, change clicked to true
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    const { name, specialty } = this.props.hog;
    const weight = this.props.hog[
      "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
    ];
    const medal = this.props.hog["highest medal achieved"];

    return (
      <div className="ui card eight wide column pigTile">
        <div className="image">
          <img src={this.getImage(name)} alt="hogPic" />
        </div>
        <div className="content">
          <h3 className="header">{name}</h3>
          <div className="meta">
            <button id="details" onClick={this.handleDetailsClick}>
              {this.state.clicked ? "Hide Details" : "More Details"}
            </button>
          </div>
          {this.state.clicked ? (
            <div className="description">
              <p>Specialty: {specialty}</p>
              <p>Highest medal achived: {medal}</p>
              <p>
                weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door
                Refrigerator with Thru-the-Door Ice and Water:
                {weight}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default HogTile;
