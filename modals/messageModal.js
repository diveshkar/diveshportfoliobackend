const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the Message schema
const MessageSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required!'],
    maxlength: 100,
  },
  phone: {
    type: String,
    required: [true, 'Phone field is required!'],
    maxlength: 20,
  },
  email: {
    type: String,
    required: [true, 'Email field is required!'],
    maxlength: 100,
  },
  messagetitle: {
    type: String,
    required: [true, 'Message title field is required!'],
    maxlength: 200,
  },
  message: {
    type: String,
    required: [true, 'Message field is required!'],
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
});

// Create the Message model
module.exports = mongoose.model('messages', MessageSchema);