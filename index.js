const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const { Note } = require('./model/note');
require('dotenv').config();
const app = express();

app.use(express.static(path.join(__dirname, 'view/build')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
  process.env.MONGO_URI,
  { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false },
  () => {
    console.log('DB connected...');
  }
);

app.get('/api/notes', async (req, res) => {
  try {
    const verifiedNotes = await Note.find({ verified: true });
    res.send(verifiedNotes);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.post('/api/notes', async (req, res) => {
  try {
    const { name, message } = req.body;

    const newNote = new Note({ name, message });
    await newNote.save();

    res.send('Note saved!');
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get('/api/verification', async (req, res) => {
  try {
    const allNotes = await Note.find({});
    res.send(allNotes);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.post('/api/verification', async (req, res) => {
  try {
    const { id } = req.body;
    const updatedNote = await Note.findById(id);
    if (updatedNote.verified === 'true') {
      updatedNote.verified = 'false';
    } else {
      updatedNote.verified = 'true';
    }
    await updatedNote.save();
    res.send('Note saved!');
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'view/build', 'index.html'));
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}!!`);
});
