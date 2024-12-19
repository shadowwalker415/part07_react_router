const loginRouter = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");

loginRouter.post("/", async (request, response, next) => {
  try {
    const user = await User.findOne({ username: request.body.username });
    const authenticated =
      user === null
        ? false
        : await bcrypt.compare(request.body.password, user.password);
    if (!(user && authenticated))
      return response
        .status(401)
        .send({ message: "Invalid username or password" });

    const tokenOwner = {
      username: user.username,
      id: user._id,
    };
    const token = jwt.sign(tokenOwner, process.env.SECRETE, {
      expiresIn: 60 * 60,
    });
    const signedUser = {
      token,
      username: user.username,
      name: user.name,
    };
    response.status(200).json(signedUser);
  } catch (err) {
    next(err);
  }
});

module.exports = loginRouter;
