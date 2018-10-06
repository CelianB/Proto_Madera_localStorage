var express = require("express")
var bodyParser = require("body-parser")
var app = express()
var fs = require("fs")

var faker = require("./data/faker");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("Requête reçue");
  res.send(faker);
});
app.post("/", (req, res) => {
  res.send("OK");
  // Ecriture des données dans BDD (ici fichier JSON)
  fs.writeFile("./data/faker.json",JSON.stringify(req.body,null,2),'utf-8',(err) => {
    if(err){
      console.log(err)
    }
  })
});
app.listen(3000);
