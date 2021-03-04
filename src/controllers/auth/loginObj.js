const { jwtSign } = require("./jwt");

// const obj = { a: 1, b: 2 };
// const {a,b} = obj
// const a = obj.a
// const b = obj.b

const LoginObj = (user) => {
  return {
    id: user.id,
    username: user.username,
    token: jwtSign({ id: user.id }),
  };
};

module.exports = LoginObj;
