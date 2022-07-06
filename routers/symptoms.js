var {
    getAll,
    createSympton,
  } = require("../controllers/symptoms");
  var express = require("express");
  var router = express.Router();
  
  router.get("/", getAll);
  router.post("/", createSympton);
  
  module.exports = router;