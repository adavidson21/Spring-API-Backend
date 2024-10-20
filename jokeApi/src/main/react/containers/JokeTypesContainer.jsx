import React, { useState, useEffect } from "react";
import { useStore } from "../createStore";
import JokeView from "../components/JokeView";
import { fetchRandomJoke } from "../services/apiService";

const JokeTypesContainer = () => {
  const { jokeTypes, fetchJokeTypes } = useStore();
  const [selectedType, setSelectedType] = useState(null); // track selected joke type
  const [joke, setJoke] = useState(null); // store the fetched joke

  useEffect(() => {
    fetchJokeTypes();
  }, [fetchJokeTypes]);

  /**
   * Handles the selection of a joke type from the dropdown.
   * @param type The joke type.
   */
  const handleSelectType = (type) => {
    setSelectedType(type);
    setJoke(null); // clear previous
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

  return (
    <div className="container mt-4">
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Select Joke Type
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

      <button
        className="btn btn-primary mt-3"
        onClick={fetchJoke}
        disabled={!selectedType} // Disable if no type selected
      >
        Fetch {selectedType} Joke
      </button>

      {joke && <JokeView jokeInfo={joke} />}
    </div>
  );
};

export default JokeTypesContainer;
