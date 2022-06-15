
● Read and parse an external file into your application and display some data from that in your app

● Retrieve data from an external API and display data in your app 

● Create a web server with at least one route and connect to it from your application using ExpressJS

● Create and use a function that accepts two or more values (parameters), calculates or determines a new value based on those inputs, and returns a new value

applications/frameworks/libraries/middleware/utilities used - express, node, body-parser, node-fetch, nodemon, rate-limiter*

* I wanted to implement a gitignore to make my api key a secret, but that would make it a little more difficult for other users to run the app, unless they got their own api key, so I will implement a rate-limiter instead. 
fetch('http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city)