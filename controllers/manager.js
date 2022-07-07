const ManagerModel = require("../models/manager");

/**
 * Get all words
 * TODO: Add pagination feature
 */
 exports.getAll = async (req, res, next) => {
    try {
      let managers = await ManagerModel.find({});
      res.send({
        count: managers.length,
        managers,
      });
    } catch (err) {
      next(err);
    }
  };

/**
 * Get word by
 * TODO: Add pagination feature
 */
 exports.getManagers = async (req, res, next) => {
    try {
      let user = req.params.user;
      let managers = await ManagerModel.find({user});
      res.send({
        count: managers.length,
        managers,
      });
    } catch (err) {
      next(err);
    }
  };
  
  exports.createManager = async (req, res, next) => {
    try {
      //TODO: Requiere validation
      let { name, email, phone } = req.body;
      let newManager = await ManagerModel.create({ name, email, phone });
      res.send({ newManager });
    } catch (err) {
      next(err);
    }
  };
  
  exports.updateManager = async (req, res, next) => {
    try {
      // TODO: Requiere validation
      // What word update?
      let managerToUpdate = req.params.email;
      // New data
      let { name, email, phone } = req.body;
      let manager = await ManagerModel.findOne({ email: managerToUpdate });
      if(!manager) return res.status(400).send({
        message: "Manager to update not found"
      })
  
      manager.name = name;
      manager.email = email;
      manager.phone = phone;
      manager.hospital = hospital;
      let updatedManager = await manager.save();
      
      if (manager == updatedManager) {ø
        return res.send({
          message: "Manager is updated",
          manager: updatedManager,
        });
      }
      res.send({
        message: "Cannot update manager",
      });
    } catch (err) {
      next(err);
    }
  };
  
  exports.deleteManager = async (req, res, next) => {
    try {
      let email = req.params.email;
      let { deletedCount } = await ManagerModel.deleteOne({ email });
      if (deletedCount == 1) {
        return res.send({
          message: "successfully deleted",
        });
      }
      return res.status(400).send({
        message: "cannot delete manager, maybe is delete before",
      });
    } catch (err) {
      next(err);
    }
  };