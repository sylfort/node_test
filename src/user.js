// const bcrypt = require("bcrypt");

// const hashPassword = async (password) => {
//   const hash = await bcrypt.hash(password, 12);
// };

// const login = async (password, hashedPassword) => {
//   const result = await bcrypt.compare(password, hashedPassword);
//   if (result) {
//     console.log("Logged in successful");
//   } else {
//     console.log("try again");
//   }
// };

const userData = {
  id: "1",
  username: "aaa",
  password: "aaa",
  token: "superUltraMasterSafeToken",
};

module.exports = userData;
