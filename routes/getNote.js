const express = require("express");
const route = express.Router();

route.use(express.json());

const data = require("../models/Note");
const cors = require("cors");
//route.use(cors());

route.get("/getallnotes", cors(), async (req, res) => {
  try {
    const info = await data.find({ notes: req.notes });
    res.status(200).json({
      status: "passed",
      info,
    });
  } catch (e) {
    res.status(400).json({
      status: "failed",
      message: e.message,
    });
  }
});

//suvey by id
route.get("/getallnotes/:id", cors(), async (req, res) => {
  try {
    const info = await data.findById(req.params.id);
    res.status(200).json(info);
  } catch (e) {
    res.status(400).json({
      status: "failed",
      message: e.message,
    });
  }
});

module.exports = route;
