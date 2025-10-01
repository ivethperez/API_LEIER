const {Router} = require('express');
const salesController = require('../controllers/salesController');
const authenticateToken = require('../middlewares/auth');

const router = Router();

router.post('/', authenticateToken, salesController.createSale);
router.get('/:id', authenticateToken, salesController.getSale);
router.get('/', authenticateToken, salesController.getSales);
router.get("/statusSale", salesController.getStatusSale);
router.put('/:id', authenticateToken, salesController.updateSale);
router.delete('/:id', authenticateToken, salesController.deleteSale);


module.exports = router;
