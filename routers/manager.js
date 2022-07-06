var {
    getAll,
    getManager,
    createManager,
    updateManager,
    deleteManager,
  } = require("../controllers/manager");
  var express = require("express");
  var router = express.Router();
  
  router.get("/", getAll);
  router.get("/:email", getManager);
  router.post("/", createManager);
  router.put("/:email", updateManager);
  router.delete("/:email", deleteManager);
  
  module.exports = router;