const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const SymptomSchema = new Schema(
  {
    date: {
      type: String,
      required: "Date cant be null",
    },
    text: {
      type: String,
      required: "Text cant be null",
    },
    user: {
      type: String,
      required: "User cant be null",
    },
  },
  { timestamps: true }
);

const SymptomsModel = mongoose.model("symptoms", SymptomSchema);

module.exports = SymptomsModel;
module.exports = SymptomsModel;