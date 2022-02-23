/* eslint-disable no-undef */
const express = require('express');
const morgan = require('morgan');
const path = require('path');
//const questions = require('./apiHelpers/qandaAPI.js');
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

// app.get('/qa/questions', (req, res) => {
//   console.log('REQUEST = ',req);
//   questions.getQuestions(req.query, (err, data) => {
//     if (err) {
//       res.status(404).send(err);
//     } else {
//       res.status(200).send(data);
//     }
//   });
// });

// app.post('/qa/questions', (req, res) => {
//   questions.postQuestions(req.body, (err, data) => {
//     if (err) {
//       console.log(req.body);
//       res.status(404).send(err);
//     } else {
//       res.status(201).send(data);
//     }
//   });
// });

// app.put('/qa/questions', (req, res) => {
//   questions.putQuestions(req.body, (err, data) => {
//     if (err) {
//       res.status(404).send(err);
//     } else {
//       res.status(200).send(data);
//     }
//   });
// });
app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});