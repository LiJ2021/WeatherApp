const express = require('express')
const bodyParser = require('body-Parser')
const rateLimit = require('express-rate-limit');
const { response } = require('express');
const { request } = require('express');
const res = require('express/lib/response');

const app = express()

const limiter = rateLimit({
    //every 15 minutes I will allow 40 requests to the server
    windowMS: 15 * 60 * 1000,
    max: 40,
    message: "Maximum requests reached in 15 minute time-frame"
})

//from node fetch imports page
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

app.set('views', './views')
app.set('view engine', 'pug')

//implement rate limiter for open key
app.use(limiter)

//parse JSON data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//'call' middleware to access static files-folders
app.use(express.static('images'))
app.use(express.static('styles'))
app.use(express.static('scripts'))


app.get('/', function(request, response){
        response.render('weather')

})

app.get('/weatherResults/:cityName', function(request, response){

    let cityName = request.params.cityName
    //confirm retrieving city name from the input field
    console.log("cityName", cityName)
    //analyze text and display information about it - how many letters in entered city?
    let cityNamelength = cityName.length
    console.log("cityNamelength", cityNamelength)

//passing retrieved data into API
fetch(`http://api.weatherapi.com/v1/current.json?key=ab3a7ce8d72a4558982140337222605&q=${cityName}&aqi=no`)


//put the information in a format that can be interpreted
.then(response =>{
    return response.json()
})
//return the selected data
//identify the parts of the data that I want to use
.then (data =>{

    //what do I want to do?  Get the specific information that I want from the api

    //data is the variable and retrieving the specific data
    let condition = data.current.condition.text
    let city = data.location.name
    let state = data.location.region
    let temperature = data.current.temp_f
    let temperature_c = data.current.temp_c
    let humidity = data.current.humidity

    //how to retrieve an image in an object that is being returned by a web address?
    //image is data.current.condition.icon
    let image = data.current.condition.icon 
    //- no error but no image - look to pug file
    
    
    //showing everything that the fetch retrieved in the console
    console.log("data", data)

    //showing specific components    
    console.log("city", city)
    console.log("state", state)
    console.log("condition", condition)
    console.log("temperature", temperature)
    console.log("temperature_c", temperature_c)
    console.log("humidity", humidity)
    //can you console.log an image?
    

    //group selected components
    let result = {
        city: city,
        state: state,
        condition: condition,
        temperature: temperature,
        temperature_c: temperature_c,
        humidity: humidity,
        image: `http:${image}`,
        cityNamelength


    }
    //is image file being properly brought in?
    console.log("image file:", result.image)
        //view the group of results that I want to see in the console
        // console.log("result", result)    

    //post results to the new page
    response.render('weatherResults', result)
  
  })


})


app.listen(1122)