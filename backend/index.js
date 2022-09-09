// 8 - Faça um programa com as seguintes características:
// 8.1 - Uma classe Chamada Universidade que terá como atributo um nome e terá um método para informar o seu nome.
// 8.2 - Relacionar a classe Pessoa para com a classe Universidade. Cada pessoa poderá ser associada a uma universidade.
// 8.3 - A classe Pessoa, por sua vez, terá um método que dirá seu nome e em que universidade trabalah7

const express = require("express");
const cors = require("cors");

const app = express();

app.listen(5500, () => console.log("Rodando na porta 5500"));

app.use(cors());

app.use(express.json());

let University = require("./class_files/University");
let User = require("./class_files/User");

const newUniversity = new University("Cesupa", "1");
const newPerson = new User("Ryan Olivera" , "1");
const newPerson2 = new User("Vini casaVelha" , "2");
const newUniversity2 = new University("Cesupa", "2");

const university = new University();
const Person = new User();

const getPersons = Person.getPersons();

app.route("/api").get((req, res) =>
  res.json({
    getPersons
  })
);

app.route('/api/newUser').post((req, res) => {

});
