package com.jokeApi.jokeApi.controller;

import com.jokeApi.jokeApi.domain.JokeResponse;
import com.jokeApi.jokeApi.domain.JokeType;
import com.jokeApi.jokeApi.service.joke.JokeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class JokeController {
    @Autowired
    private JokeService jokeService;

    /**
     * Gets a random joke.
     * If the query parameter for 'type' is provided, it will return a random joke of that type.
     * Else, gets a random joke of any type.
     * @param type The joke type to retrieve (optional).
     * @return A random joke.
     */
    @GetMapping("/random")
    public JokeResponse getJoke(@RequestParam(value = "type", required = false) String type) {
        if(type != null && !type.isEmpty()){
            return jokeService.getRandomJoke(type);
        } else{
            return jokeService.getRandomJoke();
        }
    }

    /**
     * Gets all available 'types' of jokes
     * @return The types (as a list of JokeTypes).
     */
    @GetMapping("/types")
    public List<JokeType> getJokeTypes(){
        return jokeService.getJokeTypes();
    }
}
