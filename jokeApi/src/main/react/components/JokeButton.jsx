import React from "react";

/**
 * A button that handles joke-related actions .
 * @param onClick The on click action for the button.
 * @param disabled Whether the button should be disabled.
 * @param label The label content for the button.
 * @returns The Joke button
 */
const JokeButton = ({ onClick, disabled, label }) => {
  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
        <div className="col">
          <div
            className={`card ${disabled ? "disabled-card" : "clickable-card"}`}
            onClick={!disabled ? onClick : null} // Only trigger if not disabled
            style={{
              cursor: disabled ? "not-allowed" : "pointer", // change cursor based on state
              opacity: disabled ? 0.6 : 1,
            }}
          >
            <div className="card-body">
              <h5 className="card-title text-center">{label}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JokeButton;
