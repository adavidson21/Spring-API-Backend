import React, { useState, useEffect } from "react";
import { useStore } from "../createStore";
import JokeView from "../components/JokeView";
import { fetchRandomJoke } from "../services/apiService";
import JokeButton from "../components/JokeButton";

const JokeTypesContainer = () => {
  const { jokeTypes, fetchJokeTypes } = useStore();
  const [selectedType, setSelectedType] = useState(null); // track selected joke type
  const [joke, setJoke] = useState(null); // store the fetched joke

  useEffect(() => {
    fetchJokeTypes(); // Fetch joke types on component mount
  }, [fetchJokeTypes]);

  /**
   * Handles the selection of a joke type from the dropdown.
   * @param {string} type - The selected joke type.
   */
  const handleSelectType = (type) => {
    setSelectedType(type);
    setJoke(null); // Clear previous joke
  };

  /**
   * Fetches a random joke of the selected type.
   */
  const fetchJoke = async () => {
    try {
      const jokeData = await fetchRandomJoke(selectedType);
      setJoke(jokeData);
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
  };

  /**
   * Resets the selected joke type and clears the fetched joke.
   */
  const resetSelection = () => {
    setSelectedType(null);
    setJoke(null); // Clear the previously fetched joke
  };

  return (
    <div className="container mt-4 d-flex flex-column align-items-center">
      {/* Dropdown */}
      <div className="dropdown mb-4">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          style={{ fontSize: "1.25rem", padding: "10px 20px" }} // Emphasizing dropdown size
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
                onClick={() => handleSelectType(type.name)}
              >
                {type.name}
              </a>
            ))
          ) : (
            <p className="dropdown-item">Loading...</p>
          )}
        </div>
      </div>

      {/* Joke displayed here */}
      {joke && (
        <div className="joke-container text-center my-4">
          <JokeView jokeInfo={joke} />
        </div>
      )}

      <JokeButton
        label={`Fetch ${selectedType ? selectedType : "Joke"}`}
        onClick={fetchJoke}
        disabled={!selectedType}
      />

      {selectedType && (
        <button className="btn btn-secondary" onClick={resetSelection}>
          Clear Selection
        </button>
      )}
    </div>
  );
};

export default JokeTypesContainer;
