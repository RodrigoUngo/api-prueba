var {
    getAll,
    getWatcher,
    createWatcher,
    updateWatcher,
    deleteWatcher,
  } = require("../controllers/watcher");
  var express = require("express");
  var router = express.Router();
  
  router.get("/", getAll);
  router.get("/:email", getWatcher);
  router.post("/", createWatcher);
  router.put("/:email", updateWatcher);
  router.delete("/:email", deleteWatcher);
  
  module.exports = router;