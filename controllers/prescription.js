const PrescriptionModel = require("../models/prescription");

 exports.getAll = async (req, res, next) => {
    try {
      let prescriptions = await PrescriptionModel.find({});
      res.send({
        count: prescriptions.length,
        prescriptions,
      });
    } catch (err) {
      next(err);
    }
  };

 exports.getPrescriptions = async (req, res, next) => {
    try {
      let user = req.params.user;
      let prescriptions = await PrescriptionModel.find({user})
      res.send({
        count: prescriptions.length,
        prescriptions,
      });
    } catch (err) {
      next(err);
    }
  };
  
  exports.createPrescription = async (req, res, next) => {
    try {
      let { medicine, dosis, dayperiod, day, hourperiod, hour, food, user } = req.body;
      let newPrescription = await PrescriptionModel.create({ medicine, dosis, dayperiod, day, hourperiod, hour, food, user });
      res.send({ newPrescription });
    } catch (err) {
      next(err);
    }
  };
  
  exports.updatePrescription = async (req, res, next) => {
    try {
      let prescriptionToUpdate = req.params._id;
      let { medicine, dosis, dayperiod, day, hourperiod, hour, food, user } = req.body;
      let prescription = await PrescriptionModel.findOne({ _id: prescriptionToUpdate });
      if(!prescription) return res.status(400).send({
        message: "Prescription to update not found"
      })
  
      prescription.medicine = medicine;
      prescription.dosis = dosis;
      prescription.dayperiod = dayperiod;
      prescription.day = day;
      prescription.hourperiod = hourperiod;
      prescription.hour = hour;
      prescription.food = food;
      prescription.user = user;
      let updatedPrescription = await prescription.save();
      
      if (prescription == updatedPrescription) {ø
        return res.send({
          message: "Prescription is updated",
          prescription: updatedPrescription,
        });
      }
      res.send({
        message: "Cannot update prescription",
      });
    } catch (err) {
      next(err);
    }
  };
  
  exports.deletePrescription = async (req, res, next) => {
    try {
      let _id = req.params._id;
      let { deletedCount } = await PrescriptionModel.deleteOne({ _id });
      if (deletedCount == 1) {
        return res.send({
          message: "successfully deleted",
        });
      }
      return res.status(400).send({
        message: "Cannot delete prescription, maybe is delete before",
      });
    } catch (err) {
      next(err);
    }
  };