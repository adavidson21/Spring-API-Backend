package com.jokeApi.jokeApi.service.impl.joke;

import com.jokeApi.jokeApi.domain.JokeResponse;
import com.jokeApi.jokeApi.service.joke.JokeService;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class JokeServiceImpl implements JokeService {

    @Override
    public JokeResponse getRandomJoke() {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject("https://official-joke-api.appspot.com/random_joke", JokeResponse.class);
    }

    @Override
    public JokeResponse getRandomJoke(String type) {
        RestTemplate restTemplate = new RestTemplate();
        JokeResponse[] jokes = restTemplate.getForObject("https://official-joke-api.appspot.com/jokes/" + type + "/random", JokeResponse[].class);
        return (jokes != null && jokes.length > 0) ? jokes[0] : null;
    }

    @Override
    public String[] getJokeTypes(){
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject("https://official-joke-api.appspot.com/types", String[].class);
    }
}
