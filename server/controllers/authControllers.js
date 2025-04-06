const users = require('../config/db.js');
const bcrypt = require('bcrypt');

exports.home = (req, res) => {
  res.send("Welcome to the Auth Home!");
};

exports.signUp = async (req, res) => {
  const { email, password } = req.body;

  // Check if user already exists
  const user = users.find(user => user.email === email);
  if (user) return res.status(400).json({ error: "Email already in use" });

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    users.push({
      email,
      password: hashedPassword
    });

    res.status(201).json({ success: true, email });
  } catch (err) {
    console.error("Error hashing password:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

exports.signIn = (req, res) => {
  res.send("Sign-in successful!");
};
