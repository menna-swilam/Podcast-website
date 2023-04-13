const { seasons } = require('../models/seasons');
const Joi = require('joi');
const { validateseason } = require('../helper/validateseason');

const getAllSeasons = async (req, res) => {

    try {
        const season = await seasons.find({});
        res.status(200).send(season);
    } catch (error) {
        res.status(400).send(error);
    }
};

const getSeasonByName = async (req, res) => {

    try {
        const season = await seasons.findOne({ name: req.params.name });
        res.status(200).send(season);
    } catch (error) {
        res.status(400).send(error);
    }
};

const getSeasonByEpisode = async (req, res) => {

    try {
        const season = await seasons.findOne({ episode: req.params.episode });
        res.status(200).send(season);
    } catch (error) {
        res.status(400).send(error);
    }
};

const addSeason = async (req, res) => {

    try {
        const season = await seasons.create(req.body);
        res.status(201).send(season);
    } catch (error) {
        res.status(400).send(error);
    }
   
};

const editSeason = async (req, res) => {
    
    try {
        const season = await seasons.findOne({ _id: req.params.id });
        if (req.body.name) {
            season.name = req.body.name;
        }
        if (req.body.episode) {
           season.episode = req.body.episode;
        }
        await season.save();
        res.status(200).send(season);
    } catch (error) {
        res.status(400).send(error);
    }
};


const deleteSeason = async (req, res) => {
    try {
        const season = await seasons.deleteOne({ _id: req.params.id });
        res.status(200).send(season);
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = {
    getAllSeasons,
    getSeasonByName,
    getSeasonByEpisode,
    addSeason,
    editSeason,
    deleteSeason,

};
