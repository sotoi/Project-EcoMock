/* eslint-disable no-undef */
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;
const cors = require('cors');

app.use(morgan('dev'));
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});