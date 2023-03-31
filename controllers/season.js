const { seasons } = require('../models/seasons');
const Joi = require('joi');
const { validateseason } = require('../helper/validateseason');

const getAllseasons = (req, res) => {
    res.send(seasons);
};

const getseasonById = (req, res) => {

    const season = seasons.find(c => c.id === parseInt(req.params.id));
    if (!season) {
        res.status(404).send('The season with the given ID not found !');
    } else {
        res.send(season);
    }
};

const getseasonByEpisode = (req, res) => {

    const season = seasons.find(c => c.episode === parseInt(req.params.episode));
    if (!season) {
        res.status(404).send('The season with the given episod not found !');
    } else {
        res.send(season);
    }
};


const addseason = (req, res) => {

    const schema = Joi.object({
        id:Joi.number().required(),
        name: Joi.string().min(3).required(),
        episode:Joi.string().min(3).required()

    });
    const result = schema.validate(req.body);
    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        console.log(result);
        return;
    }

    const season = {
        id: seasons.length + 1,
        name: req.body.name,
        episode: req.body.episode
    };
    seasons.push(season);
    res.send(season);
};

const editseason = (req, res) => {
    const season = seasons.find(c => c.id === parseInt(req.params.id));
    if (!season)
        res.status(404).send('The season with the given ID not found !');

    const result = validateseason(req.body);

    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        console.log(result);
        return;
    }

    season.name = req.body.name;
    season.episode = req.body.episode;
    res.send(season);

};


const deleteseason = (req, res) => {
    const season = seasons.find(c => c.id === parseInt(req.params.id));
    if (!season)
        res.status(404).send('The season with the given ID not found !');

    const index = seasons.indexOf(season);
    seasons.splice(index, 1);

    res.send(season);
};

module.exports = {
    getAllseasons,
    getseasonById,
    getseasonByEpisode,
    addseason,
    editseason,
    deleteseason,
};