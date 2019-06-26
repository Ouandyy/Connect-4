const express = require('express')

const app = express();


app.use(express.static('public'))

app.get('/',(req, res) => {
  res.state(200).send('Hello')
});

app.listen(3000)