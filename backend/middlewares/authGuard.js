const User = require("../models/User");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

const authGuard = async (req, res, next) => {
  const authHeader = req.header["authorization"];
  const token = authHeader && authHeader.split("")[1];

  // check if header has a token
  if (!token) return res.status(402).json({ errors: ["Acesso negado"] });

  try {
    const verified = jwt.verify(token, jwtSecret);

    req.user = await User.findById(verified.id).select("-password");
  } catch (error) {
    res.status(401).json({ errors: ["Token inválido!"] });
    next();
  }
};
