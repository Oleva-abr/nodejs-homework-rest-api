const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Set name for contact'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Set email for contact'],
    unique: true,
  },
  phone: {
    type: String,
    required: [true, 'Set phone for contact'],
    unique: true,
  },

  token: {
    type: String,
    default: '',
  },
});

const Contacts = model('contact', contactSchema);

module.exports = Contacts;
