const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());

// CORS por causa do erro
// Access to XMLHttpRequest at 'http://localhost:5000/signup' from origin 'http://localhost:8080' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.

var cors = require("cors");
app.use(cors());

// import Axios
const axios = require("axios").default;

const userData = require("./user");

const cards = require("./cards");

// Toda vez que busca algo no servidor
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/cards", (req, res) => {
  res.json({ status: "OK", results: cards });
  // res.send(cards);
});

// Toda vez que que vai adicionar algo
app.post("/cards/add", (req, res) => {
  console.log("add card", req.body);

  cards.push(req.body);

  res.send("OK");
});

app.post("/login", async (req, res) => {
  // faz a logica para comparar user/pwd
  const vueUser = req.body;
  console.log("login", vueUser);
  console.log("login", userData);

  if (
    vueUser.username != userData.username ||
    vueUser.password != userData.password
  ) {
    // res.send("Invalid Username or Password");
    res.json({ status: "WRONG_USER_PASS" });
  } else {
    // res.send("User Logged in");
    // res.redirect("http://localhost:8080");
    res.json({
      status: "OK",
      result: { id: 1, username: "nome do user", token: "token" },
    });
  }
});

// Logged Page
app.get("/secret", (req, res) => {
  res.send("Logged Secret Page");
});

// Signup
app.post("/signup", async (req, res) => {
  console.log(req.body);
  const singUpUser = req.body;
  userData.push(singUpUser);
  res.send("User added!");
});

// Toda vez que edita algo
// app.put()

// Delete
// app.delete()

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
