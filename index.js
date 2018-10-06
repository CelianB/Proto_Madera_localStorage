var express = require("express");
var bodyParser = require("body-parser"); // Middleware permettant de 'parser' le contenus des requetes
var app = express();                     // Création l'application
var fs = require("fs");                  // FileSystem : ecriture dans un fichier

var faker = require("./data/faker");     // ien vers le fichier json de données
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  //envoi les données (en allant sur la racine soit get sur http://localhost:3000/)
  res.send(faker);
});

app.post("/", (req, res) => {
  // Ecriture des données (en allant sur la racine soit post sur http://localhost:3000/)
  // Ecriture des données en BDD (ici fichier JSON)
  fs.writeFile(
    "./data/faker.json",JSON.stringify(req.body, null, 2), "utf-8", err => {
      if (err) {
        console.log(err);
      }
    }
  );
});
app.listen(3000); //Ecoute sur le port 3000
