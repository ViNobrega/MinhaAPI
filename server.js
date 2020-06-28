const express = require('express')
const { response } = require('express')
const app = express()
//Verbos HTTP
//Protocolo HTTP, HTTPS, Websocket 
//GET, POST, PUT, DELETE
app.get('/users', (require, response) => {
    return response.send("Hello, server")
})
app.get('/', (require,response) => {
    return response.send("Outra rota")
})

app.listen(3000, () => {
    console.log("Server ok")
})
