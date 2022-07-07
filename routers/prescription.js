var {
    getAll,
    getPrescriptions,
    createPrescription,
    updatePrescription,
    deletePrescription,
  } = require("../controllers/prescription");
  var express = require("express");
  var router = express.Router();

  router.get("/", getAll);
  router.get("/:user", getPrescriptions);
  router.post("/", createPrescription);
  router.put("/:_id", updatePrescription);
  router.delete("/:_id", deletePrescription);

  module.exports = router;