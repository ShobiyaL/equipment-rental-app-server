const { validateTokenFunc } = require("../utils/token");

const AuthCheck = (req, res, next) => {
  const token = req.headers.authorization;
//   console.log(token);
  try {
    if (!token) {
      return res.status(404).json({ message: "tokenData missing",type:"error" });
    }
    const payload = validateTokenFunc(token);
    if (!payload || typeof payload === String) {
      return res.status(401).json({ message: "Signin again",type:"error" });
    }
    req.userObj = {
      email: payload.email,
      role: payload.role,
    };
    next();
  } catch (error) {
    console.log(error, " err-authCheckFunc");
    return res.status(500).json({ message: error.message,type:"error" });
  }
};

module.exports = AuthCheck;