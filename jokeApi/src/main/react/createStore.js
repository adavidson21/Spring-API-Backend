import { create } from "zustand";
import axios from "axios";

export const useStore = create((set, get) => ({
  jokeTypes: [],
  fetchJokeTypes: async () => {
    try {
      const res = await axios.get("/types");
      set({ jokeTypes: res.data });
    } catch (err) {
      console.log(err);
    }
  },
}));
