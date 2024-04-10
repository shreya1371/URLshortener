const User = require("../models/user");
const { setUser } = require("../service/auth");

async function handleUserSignup(req, res) {
  const { name, email, password } = req.body;
  const user = await User.findOne({email, });
  if(user){
    return res.status(400).json({ error: "email already exist" });
  }

  await User.create({
    name,
    email,
    password,
  });
  return res.redirect("/");
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });

  if (!user){
    return res.status(400).json({ error: "invalid username or password" });
  }

  const token = setUser(user);
  res.cookie("uid", token);
  return res.redirect("/");
}


module.exports = {
  handleUserSignup,
  handleUserLogin,
};
