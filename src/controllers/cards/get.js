const cards = require("../../cards");

const get = (req, res) => {
  res.json({ status: "OK", results: cards });
};

module.exports = get;
