const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors')

//Iniciando App
const app = express();
app.use(express.json());
app.use(cors());

//Connect db
mongoose.connect(
  'mongodb+srv://xxxxxx:xxxxxx@node0-wk3go.mongodb.net/mercado?retryWrites=true&w=majority',{
  useNewUrlParser:true,
  useUnifiedTopology:true
});

requireDir('./src/models');

app.use('/api',require('./src/routes'))

app.listen(3001);