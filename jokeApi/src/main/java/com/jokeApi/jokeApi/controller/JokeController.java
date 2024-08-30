package com.jokeApi.jokeApi.controller;

import com.jokeApi.jokeApi.domain.JokeResponse;
import com.jokeApi.jokeApi.service.joke.JokeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class JokeController {
    @Autowired
    private JokeService jokeService;

    @GetMapping("/random")
    public JokeResponse getJoke() {
        return jokeService.getRandomJoke();
    }

}
