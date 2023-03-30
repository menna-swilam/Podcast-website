const express = require("express");
const app = express();
app.use(express.json());

const podcastsController = require('./controllers/podcast');




app.get('/api/podcasts/', podcastsController.getAllPodcasts);
app.get('/api/podcasts/:name', podcastsController.getPodcastByName);
app.get('/api/podcasts/:name/id', podcastsController.getPodcastId);
app.get('/api/podcasts/:name/category', podcastsController.getPodcastCategory);
app.get('/api/podcasts/:name/season', podcastsController.getPodcastSeason);
app.post('/api/podcasts', podcastsController.addPodcast);
app.put('/api/podcasts/:id', podcastsController.editPodcast);
app.delete('/api/podcasts/:id', podcastsController.deletePodcast);
 

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port} ...`));