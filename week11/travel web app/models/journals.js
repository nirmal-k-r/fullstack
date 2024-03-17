const mongoose = require('mongoose');


//defining our Journal models
const journalModel = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    description: String
});

const Journal = mongoose.model('Journal', journalModel); //creating a model from the schema

module.exports = Journal; //export the model for use in other files
