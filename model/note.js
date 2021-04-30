const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  name: String,
  message: String,
  verified: {
    type: Boolean,
    default: false
  }
});

const Note = mongoose.model('Notes', NoteSchema);

module.exports = { Note };
