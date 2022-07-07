const DoctorModel = require("../models/doctor");

/**
 * Get all words
 * TODO: Add pagination feature
 */
 exports.getAll = async (req, res, next) => {
    try {
      let doctors = await DoctorModel.find({});
      res.send({
        count: doctors.length,
        doctors,
      });
    } catch (err) {
      next(err);
    }
  };

/**
 * Get word by
 * TODO: Add pagination feature
 */
 exports.getDoctors = async (req, res, next) => {
    try {
      let user = req.params.user;
      let doctors = await DoctorModel.find({user})
      res.send({
        count: doctors.length,
        doctors,
      });
    } catch (err) {
      next(err);
    }
  };
  
  exports.createDoctor = async (req, res, next) => {
    try {
      //TODO: Requiere validation
      let { name, email, phone, hospital, user } = req.body;
      let newDoctor = await DoctorModel.create({ name, email, phone, hospital, user });
      res.send({ newDoctor });
    } catch (err) {
      next(err);
    }
  };
  
  exports.updateDoctor = async (req, res, next) => {
    try {
      // TODO: Requiere validation
      // What word update?
      let doctorToUpdate = req.params.email;
      // New data
      let { name, email, phone, hospital, user } = req.body;
      let doctor = await DoctorModel.findOne({ email: doctorToUpdate });
      if(!doctor) return res.status(400).send({
        message: "Doctor to update not found"
      })
  
      doctor.name = name;
      doctor.email = email;
      doctor.phone = phone;
      doctor.hospital = hospital;
      doctor.user = user
      let updatedDoctor = await doctor.save();
      
      if (doctor == updatedDoctor) {ø
        return res.send({
          message: "Doctor is updated",
          doctor: updatedDoctor,
        });
      }
      res.send({
        message: "cannot update doctor",
      });
    } catch (err) {
      next(err);
    }
  };
  
  exports.deleteDoctor = async (req, res, next) => {
    try {
      let email = req.params.email;
      let { deletedCount } = await DoctorModel.deleteOne({ email });
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