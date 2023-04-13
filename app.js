const express = require("express");
const app = express();
app.use(express.json());

const { categoryRouter } = require('./routes/category_router');
const { podcastRouter } = require('./routes/podcast_router');
const { podcasterRouter } = require('./routes/podcaster_router');
const { seasonRouter } = require('./routes/season_router');



app.use('/api/podcasts/', podcastRouter);
app.use('/api/podcaster/', podcasterRouter);
app.use('/api/category/', categoryRouter);
app.use('/api/season/', seasonRouter);



module.exports = {
    app,
};