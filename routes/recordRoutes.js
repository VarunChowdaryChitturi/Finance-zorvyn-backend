const express = require("express");
const router = express.Router();

const { createRecord, getRecords } = require("../controllers/recordController");
const checkRole = require("../middleware/authMiddleware");

// only admin can create
router.post("/", checkRole(["admin"]), createRecord);

// admin + analyst can view
router.get("/", checkRole(["admin", "analyst"]), getRecords);

module.exports = router;