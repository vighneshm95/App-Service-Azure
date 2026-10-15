const express = require("express");
const Employee = require("../models/Employee");

const router = express.Router();

router.post("/", async (req, res) => {
  const employee = await Employee.create(req.body);
  res.json(employee);
});

router.get("/", async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

module.exports = router;
