import React from "react";

/**
 * A dropdown component for selecting a joke type.
 * @param jokeTypes The list of available joke types.
 * @param selectedType - The currently selected joke type.
 * @param onSelectType - Callback for when a joke type is selected.
 * @returns The Joke dropdown.
 */
const JokeDropdown = ({ jokeTypes, selectedType, onSelectType }) => {
  return (
    <div className="dropdown mb-4">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        style={{ fontSize: "1.25rem", padding: "10px 20px" }}
      >
        {selectedType ? `Selected: ${selectedType}` : "Select Joke Type"}
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {jokeTypes.length > 0 ? (
          jokeTypes.map((type) => (
            <a
              className="dropdown-item"
              href="#"
              key={type.name}
              onClick={() => onSelectType(type.name)}
            >
              {type.name}
            </a>
          ))
        ) : (
          <p className="dropdown-item">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default JokeDropdown;
