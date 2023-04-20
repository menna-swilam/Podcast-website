const { Router } = require('express');
const seasonRouter = Router()

const seasonController = require('../controllers/season_controller');


seasonRouter.get('/', seasonController.getAllSeasons);
seasonRouter.get('/:name', seasonController.getSeasonByName);
seasonRouter.get('/ep/:episode', seasonController.getSeasonByEpisode);
seasonRouter.post('/', seasonController.addSeason);
seasonRouter.put('/:id', seasonController.editSeason);
seasonRouter.delete('/:id', seasonController.deleteSeason);

 

module.exports = {
    seasonRouter
};
