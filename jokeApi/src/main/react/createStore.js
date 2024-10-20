import { create } from "zustand";
import { fetchJokeTypesFromApi } from "./services/apiService";

export const useStore = create((set, get) => ({
  jokeTypes: [],
  fetchJokeTypes: async () => {
    try {
      const jokeTypes = await fetchJokeTypesFromApi();
      set({ jokeTypes });
    } catch (err) {
      console.log(err);
    }
  },
}));
