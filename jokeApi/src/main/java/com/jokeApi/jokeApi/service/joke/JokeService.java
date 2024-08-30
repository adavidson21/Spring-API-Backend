package com.jokeApi.jokeApi.service.joke;

import com.jokeApi.jokeApi.domain.JokeResponse;
import com.jokeApi.jokeApi.domain.JokeType;

import java.util.List;

public interface JokeService {
    /**
     * Retrieves a random joke.
     * @return A random joke.
     */
    JokeResponse getRandomJoke();

    /**
     * Retrieves a random joke of the specified type.
     * @param type The joke type.
     * @return A random joke of the specific type.
     */
    JokeResponse getRandomJoke(String type);

    /**
     * Retrieves all joke types.
     * @return The joke types.
     */
    List<JokeType> getJokeTypes();
}
