const express = require('express');
const app = express();
const port = 3000;
const sample = require('../samples.sales_report.json')


app.get('/', (req, res) => res.status(200).send());

app.use(express.static('client'));



app.listen(port, () => console.log('Port is now listening!'))