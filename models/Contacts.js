const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
        "firstname": String,
        "lastname": String,
        "email": String,
        "favoriteColor": String,
        "birthday": Date
})

module.exports= mongoose.model('Contacts', ContactSchema);