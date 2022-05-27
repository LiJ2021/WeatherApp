let express = require('express')
let app = express()

app.set('views', './views')
app.set('view engine', 'pug')

app.use(express.static('images'))
app.use(express.static('styles'))
app.use(express.static('scripts'))

app.get('/', function(request, response){
        response.render('weather')

})


app.post('/', function(request, response){ 
//npm install body-parser
//npm install multer

})

app.listen(4111)