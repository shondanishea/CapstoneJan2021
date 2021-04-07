const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
name: String,
country: String,
subject: String,
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = {
  model: Contact,
  schema: contactSchema
};
