const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const connect = require('./db/connect');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

connect.initDatabase();
mongoose.connect('mongodb+srv://app:node1234@cluster0.hrjjy.mongodb.net/contacts?retryWrites=true&w=majority');

app.use(bodyParser.json());
app.use('/', require('./routes'))

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})