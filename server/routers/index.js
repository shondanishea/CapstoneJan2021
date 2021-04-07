const { request } = require("express");
const express = require("express");
const mongoose = require ("mongoose");
const contact = require ("./routers/contact");

const app = express();

// Middleware
const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${Date.now()}`);
  next();
};
// CORS Middleware
const cors = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

app.use(express.json());
app.use(logging);
app.use(cors);
app.use('/contact',contact);

mongoose.connect("mongodb+srv://Shondanishea:Shant1r12@cluster0.dqyoz.mongodb.net/testSpa?retryWrites=true&w=majority");
const db = mongoose.connection;

let db_status = "MongoDB connection not successful.";

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => (db_status = "Successfully opened connection to Mongo!"));
