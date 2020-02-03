const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')


const app = express()
mongoose.connect('mongodb+srv://luizopassos33:luizotavio16@cluster0-rivn8.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, 
useUnifiedTopology: true,
})
app.use(cors())
app.use(express.json())
app.use(routes)



app.listen(1337)

// métodos HTTP: get, post, put, delete

//tipos de parametros:

//Query params: request.query (filtros, ordenação, paginação)
//route params: request.params (identificar um recurso na alteração ou remoção)
//body: request.body (Dados para criação ou alteração de um registro)