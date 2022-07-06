const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ManagerSchema = new Schema(
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
  },
  { timestamps: true }
);

const ManagerModel = mongoose.model("manager", ManagerSchema);

module.exports = ManagerModel;
module.exports = ManagerModel;