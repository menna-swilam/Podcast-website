const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const seasonsScheme = Schema({
    name: {
        type: String,
        required: true,
    },
   episode: {
        type: Number,
        required: true,
   },

});

const seasons = model('seasons', seasonsScheme);

module.exports = {
    seasons,
};



