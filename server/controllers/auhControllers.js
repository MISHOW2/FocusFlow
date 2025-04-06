const user = require('../config/db.js')

exports.home = (req, res) => {
  res.send("Welcome to the Auth Home!");
};

exports.signUp = (req, res) => {
 const {email,password} = req.body;
  //check if credentials match



  res.json({email,password})
};

exports.signIn = (req, res) => {
  // Sign-in logic here
  res.send("Sign-in successful!");
};
