//how to do schema
const mongoose = require("mongoose"); //call package

const noteSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },

    description: {
      type: String,
      require: true,
    },

    userid: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Note", noteSchema);
