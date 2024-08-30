package com.jokeApi.jokeApi.service.impl.joke;

import com.jokeApi.jokeApi.domain.JokeResponse;
import com.jokeApi.jokeApi.domain.JokeType;
import com.jokeApi.jokeApi.service.joke.JokeService;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class JokeServiceImpl implements JokeService {

    /**
     * Retrieves a random joke.
     * @return The random joke (from the /random_joke endpoint)
     */
    @Override
    public JokeResponse getRandomJoke() {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject("https://official-joke-api.appspot.com/random_joke", JokeResponse.class);
    }

    /**
     * Retrieves a random joke with a specified
     * @param type The type of joke.
     * @return The random joke of the specified type, or null if no jokes are found.
     */
    @Override
    public JokeResponse getRandomJoke(String type) {
        RestTemplate restTemplate = new RestTemplate();
        JokeResponse[] jokes = restTemplate.getForObject("https://official-joke-api.appspot.com/jokes/" + type + "/random", JokeResponse[].class);
        return (jokes != null && jokes.length > 0) ? jokes[0] : null;
    }

    /**
     * Retrieves all joke types.
     * @return An array of available joke types.
     */
    @Override
    public List<JokeType> getJokeTypes(){
        RestTemplate restTemplate = new RestTemplate();
        String[] types = restTemplate.getForObject("https://official-joke-api.appspot.com/types", String[].class);

        if(types == null || types.length == 0 ){
            return null;
        }

        return Arrays.stream(types)
                .map(JokeType::new)
                .collect(Collectors.toList());
    }
}
