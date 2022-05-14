//.env variables MONGODB_URI
// const dotenv = require('dotenv');
// dotenv.config();


// database code
const MongoClient = require('mongodb').MongoClient;

let _client;
let _collection;
const initDatabase = () => {
    // MongoClient.connect(process.env.MONGODB_URI, (err, client) => {
    MongoClient.connect('mongodb+srv://app:node1234@cluster0.hrjjy.mongodb.net/contacts?retryWrites=true&w=majority', (err, client) => {
        if (err) throw err;
        _client = client;
        _collection = client.db("contacts").collection("contacts");
        console.log("DB Connected Successfully");
    });
};

const getCollection = () => {

    return _collection;
};

module.exports = {
    initDatabase,
    getCollection
};