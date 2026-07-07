const {Router} = require('express');
const saleDetailController = require('../controllers/saleDetailController');
const authenticateToken = require('../middlewares/auth');

const router = Router();

router.post('/', authenticateToken, saleDetailController.createSaleDetail);
router.get('/:id', authenticateToken, saleDetailController.getSaleDetail);
router.get('/bySale/:saleId',authenticateToken, saleDetailController.getSaleDetails);
router.get('/sale/:saleId', authenticateToken, saleDetailController.getSaleDetailsBySale);
router.put('/:id', authenticateToken, saleDetailController.updateSaleDetail);
router.delete('/:id', authenticateToken, saleDetailController.deleteSaleDetail);

module.exports = router;
