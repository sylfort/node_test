const express = require("express");

const login = require("../controllers/auth/login");
const cardsGet = require("../controllers/cards/get");
const cardsPost = require("../controllers/cards/post");
const getMyDecks = require("../controllers/cards/getMyDecks");

const { authenticate } = require("../controllers/auth/jwt");

const router = express.Router();

// middleware

// Toda vez que busca algo no servidor
router.get("/", (req, res) => {
  res.send("Hello World!.");
});

router.post("/login", login);
router.get("/cards", cardsGet);

router.get("/decks", authenticate, getMyDecks);

// Toda vez que que vai adicionar algo
router.post("/cards", cardsPost);

// Logged Page
// router.get("/secret", (req, res) => {
//   res.send("Logged Secret Page");
// });

// Signup
// router.post("/signup", async (req, res) => {
//   console.log(req.body);
//   const singUpUser = req.body;
//   userData.push(singUpUser);
//   res.send("User added!");
// });

// Toda vez que edita algo
// router.put()

// Delete
// router.delete()

module.exports = router;
