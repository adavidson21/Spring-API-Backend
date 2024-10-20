import React, { Component } from "react";
import JokeView from "../components/JokeView";
import axios from "axios";
import JokeButton from "../components/JokeButton";

export class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: null,
    };
  }

  render() {
    const { joke } = this.state;

    return (
      <>
        <JokeButton
          type={null}
          onClick={() => this.randomJokeApiCall()}
          disabled={false}
        />
        {joke && <JokeView jokeInfo={joke} />}
      </>
    );
  }

  randomJokeApiCall = () => {
    const stateControl = (data) => {
      this.setState({ joke: data });
    };
    axios
      .get(`/random`)
      .then(function (response) {
        stateControl(response.data, "SUCCESS");
      })
      .catch(function (error) {
        stateControl({}, "FAILURE");
        console.log(error);
      });
  };
}

export default HomeContainer;
