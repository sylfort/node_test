const post = (req, res) => {
  console.log("add card", req.body);

  // cards.push(req.body);

  res.send("OK");
};

module.exports = post;
