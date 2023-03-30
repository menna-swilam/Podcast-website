const { podcasts } = require('../models/podcasts');
const Joi = require('joi');
const { validatepodcast } = require('../helper/validation');

const getAllPodcasts = (req, res) => {
    res.send(podcasts);
};



const getPodcastByName = (req, res) => {

    const podcast = podcasts.find(c => c.name === (req.params.name));
    if (!podcast) {
        res.status(404).send('The podcast with the given Name not found !');
    } else {
        res.send(podcast);
    }
};
const getPodcastCategory = (req, res) => {

    const podcast = podcasts.find(c => c.name === (req.params.name));
    if (!podcast) {
        res.status(404).send('The podcast with the given category not found !');
    } else {
        res.send(podcast.category);
    }
};


const addPodcast = (req, res) => {
    //    if(!req.body.name || req.body.name.length<3){
    //        res.status(400).send('Name is required and must be more than 3 characters');
    //    }

    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        category: Joi.string().min(3).required(),
        season: Joi.number().required(),
        episode: Joi.number().required()


    });
    const result = schema.validate(req.body);
    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        console.log(result);
        return;
    }

    const podcast = {
        id: podcasts.length + 1,
        name: req.body.name,
        category:  req.body.category,
        season: req.body.season,
        episode: req.body.episode
    };
    podcasts.push(podcast);
    res.send(podcast);
};

const editPodcast = (req, res) => {
    const podcast = podcasts.find(c => c.id === parseInt(req.params.id));
    if (!podcast)
        res.status(404).send('The podcast with the given ID not found !');

    const result = validatepodcast(req.body);

    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        console.log(result);
        return;
    }

    podcast.name = req.body.name;
    res.send(podcast);

};


const deletePodcast = (req, res) => {
    const podcast = podcasts.find(c => c.id === parseInt(req.params.id));
    if (!podcast)
        res.status(404).send('The podcast with the given ID not found !');

    const index = podcasts.indexOf(podcast);
    podcasts.splice(index, 1);

    res.send(podcast);
};

module.exports = {
    getAllPodcasts,
    addPodcast,
    editPodcast,
    deletePodcast,
    getPodcastByName,
    getPodcastCategory,

};