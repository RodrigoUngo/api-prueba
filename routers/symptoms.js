var {
    getAll,
    getSymptoms,
    createSympton,
    deleteSymptom,
  } = require("../controllers/symptoms");
  var express = require("express");
  var router = express.Router();
  
  router.get("/", getAll);
  router.get("/:user", getSymptoms);
  router.post("/", createSympton);
  router.delete("/:_id", deleteSymptom)
  
  module.exports = router;