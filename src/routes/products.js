const {Router} = require('express');
const productController = require('../controllers/productController');
const authenticateToken = require('../middlewares/auth');

const router = Router();

router.post('/', authenticateToken, productController.createProduct);
router.get('/:id', authenticateToken, productController.getProduct);
router.get('/', authenticateToken, productController.getProducts);
router.put('/:id', authenticateToken, productController.updateProduct);
router.delete('/:id', authenticateToken,productController.deleteProduct);

module.exports = router;