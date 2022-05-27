console.log("Testing")
fetch("http://api.weatherapi.com/v1/current.json?key=ab3a7ce8d72a4558982140337222605&q=Louisville&aqi=yes")

// //the URL contains our api key - do we want to include that in the fetch that we are going to post to github?  Am i not understanding how to fetch? how to hide my api key.

//put the information in a format that can be interpreted
.then(response =>{
    return response.json()
})
//return the selected data
//identify the parts of the data that I want to use
.then (data =>{
    //what do I want to do?  Get the specific information that I want from the api
    //data is the variable i am creating and retrieving the data
    let condition = data.current.condition.text
    let city = data.location.name
    let state = data.location.region
    let temperature = data.current.temp_f

    //how to retrieve an image in an object that is being returned by a web address?
    //image is data.current.condition.icon
    //let image = data.current.condition.icon - no error but no image
    
    
    
    //showign everything that the fetch retrieved in the console
    console.log("data", data)

    //showing specific components    
    console.log("city", city)
    console.log("state", state)
    console.log("condition", condition)
    console.log("temperature", temperature)
    //can you console.log an image?

    //group selected components
    let result = {
        name: city,
        region: state,
        condition: condition,
        temperature: temperature
    }
    //view the group of results that I want to see in the console
    console.log(result)

    //create elements to add to the website
    let nameElement = document.createElement('h5')
    nameElement.innerHTML = city
    document.body.appendChild(nameElement)

    let regionElement = document.createElement('h5')
    regionElement.innerHTML = state
    document.body.appendChild(regionElement)

    let conditionElement = document.createElement('h5')
    conditionElement.innerHTML = condition
    document.body.appendChild(conditionElement)

    let temperatureElement = document.createElement('h5')
    temperatureElement.innerHTML = temperature
    document.body.appendChild(temperatureElement)

//     let imageElement = document.createElement('img')
//     imageElement.innerHTML = image
//     document.body.appendChild(imageElement)
// })

// //forms review project

//objectives:
//retrieve image to go with whatever forecast is.  
    //do I need to create an if statment for this? 
    //or just pull the icon from current conditions? how?
    //if (text === "Overcast")
     //   return cdn.weatherapi.com/weather/64x64/day/122.png
     //else if (text === "Sunny")

     //how to retrieve information for any city?