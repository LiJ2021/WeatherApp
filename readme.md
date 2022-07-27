Weather App Project


This project will tell you the current weather conditions in different cities around the world.  If you enter a city in the text field, it will return the city name, state or country, current weather in degrees Celsius and Fahrenheit, and an image representing the weather conditions of that location.  This was achieved by creating a server that returns the data retrieved from the API to the user via the results page.  I used the free weather API at weatherapi.com.  The background used is from unsplash - an artist by the name of Levan Badzgaradze. I incorporated the following features:

● I used the templating engine pug as an extra feature to play around with it and see how it compares to rendering a webpage in regular html. Pug was formerly known as Jade.

● Retrieve data from an external API and display data in your app 

● Develop project using a common JS framework
    I used Express as the backend JS framework

● Create a web server with at least one route and connect to it from your application using ExpressJS

● Visual representation of retrieved data (images)

Applications/frameworks/libraries/middleware/utilities used - pug (HTML preprocessor/template engine), express, node, body-parser, node-fetch, nodemon, express-rate-limit

I wanted to implement a gitignore to hide my api key, but that would make it a little more difficult for other users to run the app, unless they got their own api key. 
fetch(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}`)
so I installed a rate limiter to prevent massive requests in short time frames

To run the files you have to install all middleware/applications/frameworks etc from your terminal with the following:
git
npm init -y
npm i express pug nodemon node body-parser node-fetch express-rate-limit

to run the application:

 I opened the weatherapp folder in VSCode, opened a terminal within the program,  ran nodemon weather.js, and then, in the web browser, typed localhost: 1122. 