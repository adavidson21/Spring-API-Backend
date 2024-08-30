package com.jokeApi.jokeApi.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JokeResponse {
    /**
     * The type (category) of joke (e.g. "general", "programming", etc.)
     */
    private String type;

    /**
     * The setup (start) of the joke.
     */
    private String setup;

    /**
     * The punchline (end) of the joke.
     */
    private String punchline;

    /**
     * The unique identifier of the joke.
     */
    private int id;
}
