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
    .use((req,res, next) => {
        res.setHeader('Access-Controll-Allow-Origin', '*');
        res.setHeader(
            'Access-Controll-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
        );
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        next();
    });

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})