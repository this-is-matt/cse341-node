const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const connect = require('./db/connect');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//set up swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

connect.initDatabase();
mongoose.connect('mongodb+srv://app:node1234@cluster0.hrjjy.mongodb.net/contacts?retryWrites=true&w=majority');

app.use(bodyParser.json())
    .use('/', require('./routes'))
    .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
    .use(cors())

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})