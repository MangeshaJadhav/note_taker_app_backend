const express = require("express");
const router = express.Router();
const Note = require("../models/Note");
const secret = "RESTAPI";

router.post("/creatnote", async (req, res) => {
  try {
    console.log(req.body);

    const { name, description } = req.body;

    const data = await Note.create({
      name,
      description,
    });
    res.json({
      status: "success",
      message: "Notes details insertion Successful",
      data,
    });
  } catch (e) {
    res.status(500).json({
      status: "Failed",
      message: e.message,
    });
  }
});

module.exports = router;
