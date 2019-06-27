const express = require('express');
const path = require('path');
const parser = require('body-parser');
// const connection = require('./database/index.js');
const db = require('./database/schema.js');

const app = express();
const port = 3000;


app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './public')));

app.get('/',(req, res) => {
  res.status(200).send('Get req is working')
})

app.post('/api',(req, res) => {
  let { name, email, password } = req.body;
  db.create({name, email, password})
  .then(() => {
    res.status(201).send('you have posted')
  })
  .catch((error) => {
    res.status(404).send('you failed to post', error)
  })
})



app.listen(3000,() => {console.log('Currently listening!')})