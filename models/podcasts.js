const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const podcastsScheme = Schema({
    name: {
        type: String,
        required: true,
    },
   category: {
    type: Schema.Types.ObjectId,
        ref: 'categories',
   },
   season: {
    type: Number,
        required: true,
   },
   episode: {
    type: Number,
        required: true,
   }, 
   podcaster:{
    type: Schema.Types.ObjectId,
    ref: 'podcaster',
   }

});

const podcasts = model('podcasts', podcastsScheme);

module.exports = {
    podcasts,
};



