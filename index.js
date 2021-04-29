const path = require('path');
const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();
const app = express();

mongoose.connect(
  process.env.MONGO_URI,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log('DB connected...');
  }
);

app.get('/api', (req, res) => {
  res.send('Hitting the API...');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}!!`);
});
