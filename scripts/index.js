function getData(){
    let cityName = document.getElementById('cityname').value
    window.location.href = `http://localhost:1122/weatherResults/${cityName}`
}
// function goHome(){
// app.get('/', function(request, response){
//     response.render('weather')

// })
// }
