import axios from "axios";

/**
 * Fetches a list of available joke types.
 * @returns The fetched joke types.
 */
export const fetchJokeTypesFromApi = async () => {
  try {
    const response = await axios.get("/types");
    return response.data;
  } catch (error) {
    console.error("Error fetching joke types:", error);
    throw error;
  }
};

/**
 * Fetches a random joke, optionally filtered by a joke type.
 * @param type The type of joke to fetch (optional).
 * @returns The fetched joke data.
 */
export const fetchRandomJoke = async (type = null) => {
  try {
    const response = await axios.get("/random", {
      params: type ? { type } : {},
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching joke:", error);
    throw error;
  }
};
