import React, { useState, useEffect } from "react";
import { useStore } from "../createStore";
import JokeView from "../components/JokeView";
import { fetchRandomJoke } from "../services/apiService";
import JokeButton from "../components/JokeButton";
import JokeDropdown from "../components/JokeDropdown";

const JokeTypesContainer = () => {
  const { jokeTypes, fetchJokeTypes } = useStore();
  const [selectedType, setSelectedType] = useState(null); // track selected joke type
  const [joke, setJoke] = useState(null); // store the fetched joke

  useEffect(() => {
    fetchJokeTypes(); // Fetch joke types on component mount
  }, [fetchJokeTypes]);

  /**
   * Handles the selection of a joke type from the dropdown.
   * @param type The selected joke type.
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
      <JokeDropdown
        jokeTypes={jokeTypes}
        selectedType={selectedType}
        onSelectType={handleSelectType}
      />

      {joke && (
        <div className="joke-container text-center my-4">
          <JokeView jokeInfo={joke} />
        </div>
      )}

      <JokeButton
        type={selectedType}
        onClick={fetchJoke}
        disabled={!selectedType}
      />
      <br />
      <br />
      {selectedType && (
        <button className="btn btn-secondary" onClick={resetSelection}>
          Clear Selection
        </button>
      )}
    </div>
  );
};

export default JokeTypesContainer;
