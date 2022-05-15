const routes = require('express').Router();
const {
    response
} = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const connect = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;
const Contact = require('../models/Contacts');

routes.get('/', (req, res) => {

        const results = connect.getCollection().find();

        results.toArray().then((documents) => {
            res.status(200).json(documents);
            console.log("Returned all contacts");
        });
    })
    .get('/:id', (req, res) => {

        const contactId = new ObjectId(req.params.id);
        const results = connect.getCollection().find({
            _id: contactId
        });

        results.toArray().then((documents) => {
            res.status(200).json(documents[0]);
            console.log(`Returned contact ${req.params.id}`);
        });
    })
    .post('/', async (req, res) => {
        console.log(req.body);
        const contact = new Contact({
            "firstname": req.body.firstname,
            "lastname": req.body.lastname,
            "email": req.body.email,
            "favoriteColor": req.body.favoriteColor,
            "birthday": req.body.birthday
        });

        try {
            const savedContact = await contact.save();
            res.json(savedContact);
        } catch (err) {
            res.json({
                message: err
            });
        }
    })
    .delete('/:id', async (req, res) => {
        try {
            const removedContact = await Contact.removeOne({
                _id: req.params.id
            });
            res.json(removedContact);
        } catch (err) {
            res.json({
                message: err
            });
        }
    })
    .patch('/:id', async (req, res) => {
        try {
            const updatedContact = await Contact.updateOne({
                _id: req.params.id
            }, {
                $set: {
                    firstname: req.body.firstname
                }
            });
            res.json(updatedContact);
        } catch (err) {
            res.json({
                message: err
            });
        }
    })


module.exports = routes;