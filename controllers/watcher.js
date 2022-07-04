const WatcherModel = require("../models/watcher");

/**
 * Get all words
 * TODO: Add pagination feature
 */
 exports.getAll = async (req, res, next) => {
    try {
      let watchers = await WatcherModel.find({});
      res.send({
        count: watchers.length,
        watchers,
      });
    } catch (err) {
      next(err);
    }
  };

/**
 * Get word by
 * TODO: Add pagination feature
 */
 exports.getWatcher = async (req, res, next) => {
    try {
      let email = req.params.email;
      let watcher = await WatcherModel.findOne({ email });
      if (!watcher) {
        return res.status(404).send({
          message: "Person in charge not found",
        });
      }
      res.send({ watcher });
    } catch (err) {
      next(err);
    }
  };
  
  exports.createWatcher = async (req, res, next) => {
    try {
      //TODO: Requiere validation
      let { name, email, phone } = req.body;
      let newWatcher = await WatcherModel.create({ name, email, phone });
      res.send({ newWatcher });
    } catch (err) {
      next(err);
    }
  };
  
  exports.updateDoctor = async (req, res, next) => {
    try {
      // TODO: Requiere validation
      // What word update?
      let watcherToUpdate = req.params.email;
      // New data
      let { name, email, phone } = req.body;
      let watcher = await WatcherModel.findOne({ email: watcherToUpdate });
      if(!watcher) return res.status(400).send({
        message: "Person to update not found"
      })
  
      watcher.name = name;
      watcher.email = email;
      watcher.phone = phone;
      watcher.hospital = hospital;
      let updatedWatcher = await watcher.save();
      
      if (doctor == updatedWatcher) {ø
        return res.send({
          message: "Person in charge is updated",
          watcher: updatedWatcher,
        });
      }
      res.send({
        message: "Cannot update person",
      });
    } catch (err) {
      next(err);
    }
  };
  
  exports.deleteDoctor = async (req, res, next) => {
    try {
      let email = req.params.email;
      let { deletedCount } = await WatcherModel.deleteOne({ email });
      if (deletedCount == 1) {
        return res.send({
          message: "successfully deleted",
        });
      }
      return res.status(400).send({
        message: "cannot delete doctor, maybe is delete before",
      });
    } catch (err) {
      next(err);
    }
  };