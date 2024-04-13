const router = require('express').Router();

const categoryController = require('../controllers/category');
const auth = require('../utils/auth');

router.get('/', categoryController.getAllCategories);

router.post('/create', auth, categoryController.createCategory);

router.delete('/delete', auth, categoryController.deleteCategory);

module.exports = router;