var express = require('express')
var app = express()

var faker = require('./data/faker');

app.get('/', (req, res) => {
  console.log("Requête reçue")
  res.send(faker)
})

app.listen(3000)