import React from "react";

//functional component
const JokeView = (props) => {
  const { jokeInfo } = props;

  return (
    <div className="joke-view alert bg-light mt-4 p-4">
      <h5 className="text-center">Here's a {jokeInfo.type} joke!</h5>
      <p className="text-center font-weight-bold">{jokeInfo.setup}</p>
      <p className="text-center lead punchline">{jokeInfo.punchline}</p>
    </div>
  );
};

export default JokeView;
