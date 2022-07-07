const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const DoctorSchema = new Schema(
  {
    name: {
      type: String,
      required: "Name cant be null",
    },
    email: {
      type: String,
      required: true,
      unique: "Email cant be null",
    },
    phone: {
      type: String,
      required: true,
      unique: "Phone number cant be null",
    },
    hospital: {
      type: String,
      required: "Hospital cant be null",
    },
    user: {
      type: String,
      required: "User cant be null",
    },
  },
  { timestamps: true }
);

const DoctorModel = mongoose.model("doctor", DoctorSchema);

module.exports = DoctorModel;
module.exports = DoctorModel;