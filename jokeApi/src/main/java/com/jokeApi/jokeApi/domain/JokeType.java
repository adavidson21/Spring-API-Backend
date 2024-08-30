package com.jokeApi.jokeApi.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JokeType {
    private String name;

    /**
     * Constructs a JokeType with the specified name.
     * This ensures each JokeType instance is initialized with a name.
     *
     * @param name The name of the type.
     */
    public JokeType(String name) {
        this.name = name;
    }
}
