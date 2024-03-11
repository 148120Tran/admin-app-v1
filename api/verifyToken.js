const jwt = require("jsonwebtoken");

const verify = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    //we could use any key here. we use key "token" and value will be Bearer JWTtoken => we only need jwtToken

    jwt.verify(token, process.env.SECRETE_KEY, (err, user) => {
      if (err) res.status(403).json("invalid token");

      req.user = user; // id and isAdmin / the thing we pass on auth.js (accessToken)
      next();
    });
  } else {
    return res.status(401).json("you are not authenticated");
  }
};

module.exports = verify;
