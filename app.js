const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const helmet = require("helmet");
require('./database/config');
const userRouter = require("./routers/user");
const doctorRouter = require("./routers/doctor");
const managerRouter = require("./routers/manager");
const symptomsRouter = require("./routers/symptoms");
const prescriptionRouter = require("./routers/prescription");
const passport = require("passport");
//require("./auth/auth");
const authRouter = require('./routers/auth');

const app = express();
app.use(logger("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(authRouter);
//app.use(passport.authenticate("jwt", { session: false }))
app.use("/users", userRouter);
app.use("/doctors", doctorRouter);
app.use("/managers", managerRouter);
app.use("/symptoms", symptomsRouter);
app.use("/prescriptions", prescriptionRouter);

module.exports = app;