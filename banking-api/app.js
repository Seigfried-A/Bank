const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

app.use(bodyParser.json());

//import routes...
const transactionRoutes = require('./routes/transactions');
app.use('/transactions', transactionRoutes);

app.get('/', (req, res) => {
  res.send('Home page...');
});

//connect to database...
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true }, () => {
  console.log('connected to Database!');
});

app.listen(process.env.PORT);
