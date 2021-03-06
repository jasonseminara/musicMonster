/*import all dependences*/
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const music = require('./models/musicModel');
const cors = require('cors')

const app = express();

app.use(cors())

const PORT = process.env.PORT || 3001;

/*set port and start it listening*/
app.listen(PORT, () => {
  console.log(`listen port ${PORT}`);
});

/*set up body parser */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/*set up logger*/
app.use(logger('dev'));

/*set static file_path*/
app.use(express.static('public'));

/*API routes*/
const musicRoute = require('./routes/musicroutes');
app.use('/api', musicRoute);

/*error message*/
app.get('*', (req, res) => {
  res.status(404).json({messsage: "not found"});
})
