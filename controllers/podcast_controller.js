const { podcasts } = require('../models/podcasts');
const { Podcaster } = require('../models/podcaster');
const { seasons } = require('../models/seasons');

const Joi = require('joi');
const { validatepodcast } = require('../helper/validation');

const getAllPodcasts = async (req, res) => {
    try {
        const allPodcasts = await podcasts.find({});
        res.status(200).send(allPodcasts);
    } catch (error) {
        res.status(400).send(error);
    }};

    const getAllPodcastsbyCat = async (req, res) => {
        try {
            const allPodcasts = await podcasts.find({category: req.params.category});
            res.status(200).send(allPodcasts);
        } catch (error) {
            res.status(400).send(error);
        }};

const getPodcastByName = async (req, res) => {

    try {
        //findByName
        const allPodcasts = await podcasts.findOne({ name: req.params.name});
        res.status(200).send(allPodcasts);
    } catch (error) {
        res.status(400).send(error);
    }
};

const getPodcastByNameandSuggest = async (req, res) => {

    try {
        const allPodcasts = await podcasts.findOne({ name: req.params.name});
       const pod = await podcasts.find({category: allPodcasts.category});
        res.status(200).send(pod);
    } catch (error) {
        res.status(400).send(error);
    }
};

const getPodcastCategory = async (req, res) => {

    try {
        const allPodcasts = await podcasts.findOne({ _id: req.params.id });
        res.status(200).send(allPodcasts.category);
    } catch (error) {
        res.status(400).send(error);
    }
};
const getPodcasterName = async (req, res) => {

    try {
        const allPodcasts = await Podcaster.findOne({ _id: req.params.id });
        res.status(200).send(allPodcasts.name);
    } catch (error) {
        res.status(400).send(error);
    }
};




const addPodcast = async (req, res) => {
    try {
        const podcast = await podcasts.create(req.body);
        res.status(201).send(podcast);
    } catch (error) {
        res.status(400).send(error);
    }
   
};

const editPodcast = async (req, res) => {
    const userId = req.params.id;
    try {
        // const course = await Course.findByIdAndUpdate({ _id: userId }, req.body);
        const podcast = await podcasts.findOne({ _id: userId });
        if (req.body.name) {
            podcast.name = req.body.name;
        }
        if (req.body.category) {
            podcast.category = req.body.category;
        }
        if (req.body.season) {
            podcast.season = req.body.season;
        }
        if (req.body.episode) {
            podcast.episode = req.body.episode;
        }
        await podcast.save();
        res.status(200).send(podcast);
    } catch (error) {
        res.status(400).send(error);
    }
};


const deletePodcast = async (req, res) => {
    try {
        const podcast = await podcasts.deleteOne({ _id: req.params.id });
        res.status(200).send(podcast);
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = {
    getAllPodcasts,
    addPodcast,
    editPodcast,
    deletePodcast,
    getPodcastByName,
    getPodcastCategory,
    getAllPodcastsbyCat,
    getPodcasterName,
getPodcastByNameandSuggest,
};
