const User = require("../models/User");

// CREATE USER
const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    // check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({
      name,
      email,
      password,
      role,
    });

    // remove password from response
    const { password: pwd, ...userData } = user._doc;

    res.status(201).json(userData);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL USERS
const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createUser, getUsers };