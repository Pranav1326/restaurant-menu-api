const router = require('express').Router();
const categoryController = require('../controllers/category');

router.get('/', categoryController.getAllCategories);

router.post('/create', categoryController.createCategory);

router.delete('/delete', categoryController.deleteCategory);

module.exports = router;