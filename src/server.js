const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.json());

// CORS por causa do erro
// Access to XMLHttpRequest at 'http://localhost:5000/signup' from origin 'http://localhost:8080' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.

var cors = require("cors");
app.use(cors());

// const userData = require("./user");
// const cards = require("./cards");

app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
