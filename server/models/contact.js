const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new mongoose.Schema({
  Name: String,
  Country: String,
  Subject:String
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = {
  model: Contact,
  schema: contactSchema
};
