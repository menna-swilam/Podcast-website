const Joi = require('joi');

function validateseason(season) {
    const schema = Joi.object({
        id: Joi.number().required(),
        name: Joi.string().min(3).required(),
        episode: Joi.string().min(3).required()
    });

    return schema.validate(season);
}

module.exports = {
    validateseason,
};