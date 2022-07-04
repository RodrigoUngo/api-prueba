var {
  getAll,
  getDoctor,
  createDoctor,
  updateDoctor,
  deleteDoctor,
} = require("../controllers/doctor");
var express = require("express");
var router = express.Router();

router.get("/", getAll);
router.get("/:email", getDoctor);
router.post("/", createDoctor);
router.put("/:email", updateDoctor);
router.delete("/:email", deleteDoctor);

module.exports = router;