var {
    getAll,
    getDoctors,
    createDoctor,
    updateDoctor,
    deleteDoctor,
  } = require("../controllers/doctor");
  var express = require("express");
  var router = express.Router();

  router.get("/", getAll);
  router.get("/:user", getDoctors);
  router.post("/", createDoctor);
  router.put("/:email", updateDoctor);
  router.delete("/:email", deleteDoctor);

  module.exports = router;