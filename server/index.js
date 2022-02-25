/* eslint-disable no-undef */
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const compression = require('compression');
//const questions = require('./apiHelpers/qandaAPI.js');
const app = express();
const port = process.env.PORT || 3001;
const cors = require('cors');
const s3 = require('./s3');
const fetch = require('node-fetch');
const GITAPIKEY = process.env.GITAPIKEY;
const API_URL = process.env.API_URL;
const axios = require('axios');
app.use(express.json());
// app.use(compression());
app.use(morgan('dev'));
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/api/*', async (req, res, next) => {
console.log('REQUEST OBJ:', req);
  try{
    console.log('URL:', API_URL + req.originalUrl.slice(4))
    const payload = await axios({
      method: req.method.toLowerCase(),
      url: API_URL + req.originalUrl.slice(4),
      headers: { Authorization: GITAPIKEY },
      data: req.body
    });
    console.log('PAYLOAD:', payload)
    res.send(payload.data);
    next();
  } catch(err) {
    res.send(err);
    next();
  }
});

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
