package com.jokeApi.jokeApi.controller;

import com.jokeApi.jokeApi.domain.JokeResponse;
import com.jokeApi.jokeApi.service.joke.JokeService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class JokeController {

    @GetMapping("/random")
    public JokeResponse getJoke(){
        return JokeService.getRandomJoke();
    }
}
