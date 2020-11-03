const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser=require('body-parser');

app.use(bodyParser.json());

var modals = require('./routes/route');

app.use('',  modals);

app.listen(process.env.PORT, () => console.log('Server is ready on localhost:' + process.env.PORT));