const express = require('express');
const path = require('path');

const app = express();


app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req, res) => {
  res.state(200).send('Hello')
});

app.listen(3000, () => console.log('App is listening'))