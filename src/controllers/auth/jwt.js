const jwt = require("jsonwebtoken");

const jwtKey = "key";

// spread operator

module.exports = {
  jwtSign(obj) {
    const token = jwt.sign(
      { ...obj, iat: Math.floor(Date.now() / 1000) },
      jwtKey
    );

    return `Bearer ${token}`;
  },

  async authenticate(req, res, next) {
    if (!req.headers.authorization) {
      return res.sendStatus(401);
    }

    const token = req.headers.authorization.split(" "); // ["Bearer", "token..."]

    if (token[0] !== "Bearer") {
      return res.sendStatus(401);
    }

    jwt.verify(token[1], jwtKey, async (err, decoded) => {
      if (err) return res.json({ status: "WRONG_TOKEN" });

      console.log("token", decoded);

      return next();
      // return res.sendStatus(401);
    });
  },
};
