const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')))

app.get('/',(req, res) => {
  res.status(200).send('Get req is working')
})

app.listen(3000,() => {console.log('Currently listening!')})