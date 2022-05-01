const routes = require('express').Router();
const connect = require('../db/connect');
const objectId = require('mongodb').objectId;

routes.get('/', (req, res) => {

    const results = connect.getCollection().find()
    
    results.toArray().then((documents) => {
        res.status(200).json(documents);
        console.log("Returned all contacts");
    });
       

    // res.send('Hello home!'); this is what should be in this page. if contacts.js was working this is what would be here
});

routes.get('/:id', (req, res) => {

    const contactId = new objectId(req.params.id);
    const results = connect.getCollection().find({_id: contactId});
    
    results.toArray().then((documents) => {
        res.status(200).json(documents[0]);
        console.log(`Returned contact ${req.params.id}`);
    });
});
module.exports = routes;