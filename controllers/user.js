const User = require("../models/user");
const { setUser } = require("../service/auth");

async function handleUserSignup(req, res) {
  const { name, email, password } = req.body;
  const user = await User.findOne({email, });
  if(user){
    res.send("Email already exist");
    return res.render("signup", {
      error: "Email already exist",
    });
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
    res.send("Invalid Username or Password");
    return res.render("login", {
      error: "Invalid Username or Password",
    });
  }

  const token = setUser(user);
  res.cookie("uid", token);
  return res.redirect("/");
}


module.exports = {
  handleUserSignup,
  handleUserLogin,
};
