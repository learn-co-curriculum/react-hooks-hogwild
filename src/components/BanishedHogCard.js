import React from "react";

//fetch 1 random bacon gif
// results of fetch goes to img src of each banished hog
// display hogs name under bacon gif
const myKey = "y7uQOLStw37upyo5FpJwhOTaPPaqS6vU";

class BanishedHogCard extends React.Component {
  constructor() {
    super();
    this.state = {
      img_src: "https://media.giphy.com/media/coDfEEYJs2WVW/giphy.gif"
    };
  }

  fetchGIF = () => {
    fetch(
      `http://api.giphy.com/v1/gifs/random?tag=bacon-sausage-pork&api_key=${myKey}`
    )
      .then(res => res.json())
      .then(json =>
        this.setState({
          img_src: json.data.image_original_url
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
          <img onClick={this.fetchGIF} src={this.state.img_src} />
        </div>
        <div className="content">
          <p className="header">RIP {this.props.name}</p>
        </div>
      </div>
    );
  }
}

export default BanishedHogCard;
