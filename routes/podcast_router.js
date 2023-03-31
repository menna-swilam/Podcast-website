const { Router } = require('express');
const podcastRouter = Router()

const podcastController = require('../controllers/podcast_controller');


podcastRouter.get('/', podcastController.getAllPodcasts);
podcastRouter.post('/', podcastController.addPodcast);
podcastRouter.put('/:id', podcastController.editPodcast);
podcastRouter.delete('/:id', podcastController.deletePodcast);
podcastRouter.get('/:name', podcastController.getPodcastByName);
podcastRouter.get('/:category', podcastController.getPodcastCategory);
 
 

module.exports = {
    podcastRouter
};
