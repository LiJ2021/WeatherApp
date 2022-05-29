const express = require('express')
const bodyParser = require('body-Parser')
const app = express()

app.set('views', './views')
app.set('view engine', 'pug')

//parse JSON data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static('images'))
app.use(express.static('styles'))
app.use(express.static('scripts'))

app.get('/', function(request, response){
        response.render('weather')

})


// app.post('/', function(request, response){ 
// //npm install body-parser - body parsing middleware
// //npm install multer
//     console.log(request.body)
//     console.log(`Weather for: ${request.body.city}`)
//     response.send(`Weather for: ${request.body.city}`)
// })

app.post('/weatherResults', function(request, response){
    response.render('weatherResults', request.body)
})

app.listen(4111)