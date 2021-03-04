const loginObj = require("./loginObj");

const userData = {
  id: "1",
  username: "aaa",
  password: "aaa",
};

const login = async (req, res) => {
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
      result: loginObj(userData),
    });
  }
};

module.exports = login;
