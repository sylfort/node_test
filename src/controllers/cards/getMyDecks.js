const cards = require("../../cards");

const get = (req, res) => {
  res.json({ status: "OK", results: cards[0] });
};

module.exports = get;

// Fluxo de login
// 1. Login -> loginObj -> id, username, token
// 2. Todas as chamadas autenticadas devem conter o header Authorization `Bearer token...`
// 3. API vai parse o token para extrair o ID do usuario e saber quem esta fazendo o request
