const { Podcaster } = require('../models/podcaster');
const Joi = require('joi');
const { validatepodcaster } = require('../helper/validation');

const getAllPodcasters = async (req, res) => {
    try {
        const allPodcasters = await Podcaster.find({});
        res.status(200).send(allPodcasters);
    } catch (error) {
        res.status(400).send(error);
    }
};
const getPodcasterByName = async (req, res) => {
   
    try {
        //findByName
        const allPodcasters = await Podcaster.findOne({ name: req.params.name});
        res.status(200).send(allPodcasters);
    } catch (error) {
        res.status(400).send(error);
    }
};

 
const addPodcaster = async (req, res) => {
    try {
        const podcaster = await Podcaster.create(req.body);
        res.status(201).send(podcaster);
    } catch (error) {
        res.status(400).send(error);
    }
};

const editPodcaster = async (req, res) => {
    const userId = req.params.id;
    try {
        const podcaster = await Podcaster.findOne({ _id: userId });
        if (req.body.name) {
            podcaster.name = req.body.name;
        }
        if (req.body.podcasts) {
            podcaster.podcasts = req.body.podcasts;
        }
        if (req.body.Rating) {
            podcaster.Rating = req.body.Rating;
        }
        await podcaster.save();
        res.status(200).send(podcaster);
    } catch (error) {
        res.status(400).send(error);
    }
};


const deletePodcaster = async (req, res) => {
    try {
        const podcaster = await Podcaster.deleteOne({ _id: req.params.id });
        res.status(200).send(podcaster);
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = {
    getAllPodcasters,
    getPodcasterByName, 
    addPodcaster,
    editPodcaster,
    deletePodcaster,
};
