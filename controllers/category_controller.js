const { categories } = require('../models/categories');
const Joi = require('joi');
const { validatecategory } = require('../helper/validation');

const getAllcategories = async (req, res) => {
    try {
        const allcategories = await categories.find({});
        res.status(200).send(allcategories);
    } catch (error){
        res.status(400).send(error);
    }
};


const getcategoryByName = async (req, res) => {
    try {
        const category = await categories.find({name:req.params.name});
        res.status(200).send(category);
    } catch (error){
        res.status(400).send(error);
    }
};

const addcategory = async (req, res) => {
    try {
        const category = await categories.create(req.body);
        res.status(200).send(category);
    } catch (error){
        res.status(400).send(error);
    }
};

const editcategory = async (req, res) => {
    try {
        const category = await categories.find({name:req.params.name});
        if (!category){
            return res.status(404).send('category not found');
        }
        if(req.body.name){
            category.name = req.body.name;
        }
        await category.save();
        res.status(200).send(category);
    } catch (error){
        res.status(400).send(error);
    }

};



const deletecategory = async (req, res) => {
    try {
        const category = await categories.deleteOne({name:req.params.name});
        res.status(200).send(category);
    } catch (error){
        res.status(400).send(error);
    }
};

module.exports = {
    getAllcategories,
    getcategoryByName, 
    addcategory,
    editcategory,
    deletecategory,
};
