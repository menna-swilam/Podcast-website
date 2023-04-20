const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const podcasterScheme = Schema({
    name: {
        type: String,
        required: true,
    },
    podcasts: {
        type: String,
        required: true,
    },
    No_of_episodes: {
        type: Number,
    },
    Rating: {
        type: Number,
    },
});

const Podcaster = model('Podcaster', podcasterScheme);

module.exports = {
    Podcaster,
};
