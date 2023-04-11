const { Router } = require('express');
const seasonRouter = Router()

const seasonController = require('../controllers/season');


seasonRouter.get('/', seasonController.getAllseasons);
seasonRouter.post('/', seasonController.addseason);
seasonRouter.put('/:id', seasonController.editseason);
seasonRouter.delete('/:id', seasonController.deleteseason);
seasonRouter.get('/:id', seasonController.getseasonById);
seasonRouter.get('/:episode', seasonController.getseasonByEpisode);
 
 

module.exports = {
     seasonRouter
};
