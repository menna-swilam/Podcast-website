const { Router } = require('express');
const podcasterRouter = Router()

const podcasterController = require('../controllers/podcaster_controller');


podcasterRouter.get('/', podcasterController.getAllPodcasters);
podcasterRouter.get('/:id', podcasterController.getPodcasterById);
podcasterRouter.get('/name/:name', podcasterController.getPodcasterByName);
podcasterRouter.post('/', podcasterController.addPodcaster);
podcasterRouter.put('/:id', podcasterController.editPodcaster);
podcasterRouter.delete('/:id', podcasterController.deletePodcaster);

module.exports = {
    podcasterRouter
};
