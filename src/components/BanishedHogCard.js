import React from "react";

class BanishedHogCard extends React.Component {
  constructor() {
    super();
    this.state = {
      imgSrc: null
    };
  }

  fetchGIF = () => {
    fetch(
      "http://api.giphy.com/v1/gifs/random?tag=bacon-sausage-pork&api_key=y7uQOLStw37upyo5FpJwhOTaPPaqS6vU"
    )
      .then(res => res.json())
      .then(json =>
        this.setState({
          imgSrc: json.data.image_original_url
        })
      );
  };
  componentDidMount = () => {
    this.fetchGIF();
  };

  render() {
    return (
      <div className="ui centered card">
        <div className="image">
          <img onClick={this.fetchGIF} src={this.state.imgSrc} />
        </div>
        <div className="content">
          <p className="header">RIP {this.props.name}</p>
        </div>
      </div>
    );
  }
}

export default BanishedHogCard;
