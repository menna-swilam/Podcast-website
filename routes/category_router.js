const { Router } = require('express');
const categoryRouter = Router()

const categoryController = require('../controllers/category_controller');


categoryRouter.get('/', categoryController.getAllcategories);
categoryRouter.get('/:id', categoryController.getcategoryByID);

categoryRouter.post('/', categoryController.addcategory);
categoryRouter.put('/:id', categoryController.editcategory);
categoryRouter.delete('/:id', categoryController.deletecategory);

module.exports = {
    categoryRouter
};
