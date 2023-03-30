const { categories } = require('../models/categories');
const Joi = require('joi');
const { validatecategory } = require('../helper/validation');

const getAllcategories = (req, res) => {
    res.send(categories);
};


const getcategoryByName = (req, res) => {
    const category = categories.find(c => c.name === req.params.name);
    if (!category) {
        res.status(404).send('The category with the given ID not found !');
    } else {
        res.send(category);
    }
};

const addcategory = (req, res) => {
      if(!req.body.name || req.body.name.length<3){
       res.status(400).send('Name is required and must be more than 3 characters');
       }

    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    const result = schema.validate(req.body);
    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        console.log(result);
        return;
    }

    const category = {
        id: categories.length + 1,
        name: req.body.name
    };
    categories.push(category);
    res.send(category);
};

const editcategory = (req, res) => {
    const category = categories.find(c => c.id === parseInt(req.params.id));
    if (!category)
        res.status(404).send('The category with the given ID not found !');

    const result = validatecategory(req.body);

    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        console.log(result);
        return;
    }

    category.name = req.body.name;
    res.send(category);

};


const deletecategory = (req, res) => {
    const category = categories.find(c => c.id === parseInt(req.params.id));
    if (!category)
        res.status(404).send('The category with the given ID not found !');

    const index = categories.indexOf(category);
    categories.splice(index, 1);

    res.send(category);
};

module.exports = {
    getAllcategories,
    getcategoryByName, 
    addcategory,
    editcategory,
    deletecategory,
};
