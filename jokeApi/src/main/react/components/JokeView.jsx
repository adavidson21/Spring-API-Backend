import React from "react";

//functional component
const JokeView = (props) => {
  const { jokeInfo } = props;

  return (
    <div className="joke-view alert bg-light mt-4 p-4">
      <h4 className="text-center">Here's a {jokeInfo.type} joke!</h4>
      <br />
      <br />
      <h3 className="text-center font-weight-bold">{jokeInfo.setup}</h3>
      <h2 className="text-center lead punchline">
        <b>{jokeInfo.punchline}</b>
      </h2>
    </div>
  );
};

export default JokeView;
