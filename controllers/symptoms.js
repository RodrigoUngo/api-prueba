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