const Joi = require('joi');

function validatepodcast(podcast) {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        category: Joi.string().min(3).required(),
        season: Joi.number().required(),
        episode: Joi.number().required()
    });

    return schema.validate(podcast);
}

module.exports = {
    validatepodcast,
};
