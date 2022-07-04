const mongoose = require("mongoose");
var debug = require('debug')('remeMed:server');

mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/remeMed")
  .then(
    () => {
      debug("Database connected ");
    },
    (err) => {
      debug("Error to connect to database %o", err);
    }
  );