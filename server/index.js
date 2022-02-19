/* eslint-disable no-undef */
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;
const cors = require('cors');
const s3 = require('./s3');

app.use(morgan('dev'));
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/s3Url', (req, res) => {
  s3().then(url => {
    res.status(200).send(url)
  });
});
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});