import React from "react";

//functional component
const JokeView = (props) => {
  const { jokeInfo } = props;

  return (
    <div>
      <h1>Here's a {jokeInfo.type} joke!</h1>
      <p>{jokeInfo.setup}</p>
      <p>{jokeInfo.punchline}</p>
    </div>
  );
};

export default JokeView;
