import React, { Component } from "react";
import JokeView from "../components/JokeView";
import axios from "axios";

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
        <div className="container mt-5">
          <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5
                    className="card-title text-center"
                    onClick={() => this.randomJokeApiCall()}
                  >
                    Get a Random Joke!
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
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
