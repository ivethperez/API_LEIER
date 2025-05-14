const {Router} = require('express');
const priceProductController = require('../controllers/priceProductController');
const authenticateToken = require('../middlewares/auth');

const router = Router();

router.post('/', authenticateToken, priceProductController.createPriceProduct);
router.get('/:id', authenticateToken, priceProductController.getPriceProduct);
router.get('/', authenticateToken, priceProductController.getPriceProducts);
router.put('/:id', authenticateToken, priceProductController.updatePriceProduct);
router.delete('/:id', authenticateToken, priceProductController.deletePriceProduct);

module.exports = router;