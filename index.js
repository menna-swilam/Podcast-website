const express = require("express");
const app = express();
app.use(express.json());

const podcastsController = require('./controllers/podcast');




app.get('/api/podcasts/', podcastsController.getAllPodcasts);
app.get('/api/podcasts/:name', podcastsController.getPodcastByName);
app.get('/api/podcasts/:name/category', podcastsController.getPodcastCategory);
app.post('/api/podcasts', podcastsController.addPodcast);
app.put('/api/podcasts/:id', podcastsController.editPodcast);
app.delete('/api/podcasts/:id', podcastsController.deletePodcast);
app.get('/api/category', CategoriesController.getAllcategories);
app.get('/api/category/:name', CategoriesController.getcategoryByName);
app.post('/api/category', CategoriesController.addcategory);
app.put('/api/category/:id', CategoriesController.editcategory);
app.delete('/api/category/:id', CategoriesController.deletecategory);
 

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port} ...`));
