const Record = require("../models/Record");

// CREATE RECORD
const createRecord = async (req, res) => {
  try {
    const { amount, type, category, notes, createdBy } = req.body;

    const record = await Record.create({
      amount,
      type,
      category,
      notes,
      createdBy,
    });

    res.status(201).json(record);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL RECORDS
const getRecords = async (req, res) => {
  try {
    const records = await Record.find().populate("createdBy", "name email");
    res.json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createRecord, getRecords };