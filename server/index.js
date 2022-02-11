const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3001;
const cors = require('cors');

app.use(morgan('dev'));
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
})


app.get('/' ,(req, res) => {
  // console.log(req.headers);
//   req.redirect('/product/42366')
})