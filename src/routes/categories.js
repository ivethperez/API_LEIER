const {Router} = require('express');
const categoryController = require('../controllers/categoryController');
const authenticateToken = require('../middlewares/auth');

const router = Router();

router.post('/', authenticateToken, categoryController.createCategory);
router.get('/:id', authenticateToken, categoryController.getCategory);
router.get('/', authenticateToken, categoryController.getCategories);
router.put('/:id', authenticateToken, categoryController.updateCategory);
router.delete('/:id', authenticateToken, categoryController.deleteCategory);

module.exports = router;
