const express = require("express");
const router = express.Router();

const { createUser, getUsers } = require("../controllers/userController");
const checkRole = require("../middleware/authMiddleware");

// only admin can create users
router.post("/", checkRole(["admin"]), createUser);

// admin can view users
router.get("/", checkRole(["admin"]), getUsers);

module.exports = router;