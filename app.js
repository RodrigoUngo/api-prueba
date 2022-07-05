const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const helmet = require("helmet");
require('./database/config');
const userRouter = require("./routers/user");
const doctorRouter = require("./routers/doctor");
const watcherRouter = require("./routers/watcher")
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
app.use("/watchers", watcherRouter);

module.exports = app;