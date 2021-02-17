import React, { Component } from "react";
import API from "../utils/API";
import Matched from "../components/Matched";

const styles = {
  img: {
    width: "18rem",
  },
};

export default class Discover extends Component {
  state = {
    matches: 0,
    matched: false,
    puppyImg: ""
  };

  componentDidMount() {
    this.getPuppy();
  }

  getPuppy = () => {
    API.getRandom()
      .then((puppy) => this.setState({ puppyImg: puppy.data.message }))
      .catch((err) => console.log(err));
  };

  handleDislikeClick = () => {
    this.getPuppy();
  }

  handleLikeClick = () => {
    let randomNum = Math.floor( Math.random() * 5 ) + 1;
    if ( randomNum === 1 ) {
      this.setState({ matches: this.state.matches + 1 });

    }
    this.getPuppy();
  }

  render() {
    return (
      <div>
        <div className="card" style={styles.img}>
          <img src={this.state.puppyImg} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary" onClick={ this.handleDislikeClick }>
              Dislike
            </a>
            <a href="#" className="btn btn-primary" onClick={ this.handleLikeClick }>
              Like
            </a>
            <h3>Made friends with { this.state.matches } puppies so far!</h3>
            {/* { 
              if ( this.state.matched ) {
                <Matched />
              }
            } */}
          </div>
        </div>
      </div>
    );
  }
}
