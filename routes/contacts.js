const routes = require('express').Router();

routes.get('/', (req, res) => {

    //ugly code
    const dotenv = require('dotenv');
    dotenv.config();

    const MongoClient = require('mongodb').MongoClient;
    MongoClient.connect(process.env.MONGODB_URI, function (err, db) {
        if (err) throw err;
        var dbo = db.db("contacts");
        dbo.collection("contacts").find().toArray(function (err, result) {
            if (err) throw err;
            // console.log(result);
            res.json(result);
            db.close();
        });
    });

    // res.send('Hello contacts!');
})

module.exports = routes;