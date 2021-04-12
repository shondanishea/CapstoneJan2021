const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const contactController = require('./controller/contact');

const app = express();


mongoose.connect("mongodb+srv://Shondanishea:Shant1r12@cluster0.dqyoz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

app.use(express.json());
app.use(cors());
app.use('/contact', contactController);

const db = mongoose.connection;

let db_status = 'not connected to db';

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => db_status = 'Connected');


app.get('/',(req,res) => {
  res.status(200).send(db_status);
});

app.listen(3000,() => console.log('listening on 3000'));
