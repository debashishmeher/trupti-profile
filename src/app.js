const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, "../config.env") });
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const pug = require("pug");
const cors=require("cors")

// require files
const viewRouter=require("../router/viewRouter")

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// set view engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "../view"));

// render static file
app.use("/", viewRouter);
app.use(express.static(path.join(__dirname, "../public")));


app.listen(process.env.PORT, (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`server listening at port no ${process.env.PORT}`);
  });
  