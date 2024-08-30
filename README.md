# Spring-API-Backend
Spring API Backend Assignment for CPSC 6175

## Running Locally 

R

## Assignment Details
Create a new spring project with Gradle that connects to the [joke api](https://github.com/15Dkatz/official_joke_api?tab=readme-ov-file).

Connect to the following API endpoints:
- https://official-joke-api.appspot.com/random_joke
- https://official-joke-api.appspot.com/types
- https://official-joke-api.appspot.com/jokes/programming/random
    - Where "programming" in the url can be one of the types from the prior API (so it will be a path parameter).

Controller should contain 3 endpoints:
1. Types of jokes 
2. Random joke 
3. Random joke by type

*Could consolidate it down to two if you make the joke type optional, query param instead of path param.* 


### Deliverables:

1. The project should contain at least two endpoints, if you consolidate, and Java Objects for the responses. 
2. The responses coming from the application should be in JSON format, either an array or key value pairs depending on the data response from the API. 


## Class References 

Links to git repos for associated lecuture content.

[Spring Gradle Intro](https://github.com/JoseJCanedo/Spring_Gradle_Intro)
[Spring MVC](https://github.com/JoseJCanedo/Spring_Gradle_MVC)
[Spring Controllers](https://github.com/JoseJCanedo/Spring_Gradle_Controllers)
[Spring REST APIs](https://github.com/JoseJCanedo/Spring_Gradle_Rest_Services/tree/main)
