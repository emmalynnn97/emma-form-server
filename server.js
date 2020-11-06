const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');
require('dotenv').config()
const app = express();
const username = process.env.EMAIL_USERNAME
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors());
const port = process.env.PORT || 5001;

app.get('/', (req, res) => {
    res.status(200).send('hi')
})

app.listen(port, () => {
    console.log(`Emma Contact server is listening on port ${port}`)
})