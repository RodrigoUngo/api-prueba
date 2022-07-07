const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const PrecripionSchema = new Schema(
  {
    medicine: {
      type: String,
      required: "Medicine cant be null",
    },
    dosis: {
      type: String,
      required: "Email cant be null",
    },
    dayperiod: {
      type: String,
      required: "Day period number cant be null",
    },
    day: {
      type: String,
      required: "Day cant be null",
    },
    hourperiod: {
        type: String,
        required: "Hour period cant be null",
      },
    hour: {
        type: String,
        required: "Hour cant be null",
      },
    food: {
        type: String,
        required: "Food cant be null",
      },
    user: {
      type: String,
      required: "User cant be null",
    },
  },
  { timestamps: true }
);

const PrescriptionModel = mongoose.model("prescription", PrecripionSchema);

module.exports = PrescriptionModel;
module.exports = PrescriptionModel;