var {
    getAll,
    getManagers,
    createManager,
    updateManager,
    deleteManager,
  } = require("../controllers/manager");
  var express = require("express");
  var router = express.Router();
  
  router.get("/", getAll);
  router.get("/:user", getManagers);
  router.post("/", createManager);
  router.put("/:_id", updateManager);
  router.delete("/:_id", deleteManager);
  
  module.exports = router;