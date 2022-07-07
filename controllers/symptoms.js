const SymptomModel = require("../models/symptoms");

 exports.getAll = async (req, res, next) => {
    try {
      let symptoms = await SymptomModel.find({});
      res.send({
        count: symptoms.length,
        symptoms,
      });
    } catch (err) {
      next(err);
    }
  };

  exports.getSymptoms = async (req, res, next) => {
    try {
      let user = req.params.user
      let symptoms = await SymptomModel.find({user});
      res.send({
        count: symptoms.length,
        symptoms,
      });
    } catch (err) {
      next(err);
    }
  };
  
  exports.createSympton = async (req, res, next) => {
    try {
      //TODO: Requiere validation
      let { date, text } = req.body;
      let newSymptom = await SymptomModel.create({ date, text });
      res.send({ newSymptom });
    } catch (err) {
      next(err);
    }
  };

  exports.deleteSymptom = async (req, res, next) => {
    try {
      let _id = req.params._id;
      let { deletedCount } = await ManagerModel.deleteOne({ _id });
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