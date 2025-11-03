const {Router} = require('express');
const purchaseOrderController = require('../controllers/purchaseOrderController');
const authenticateToken = require('../middlewares/auth');

const router = Router();

router.post('/', authenticateToken, purchaseOrderController.createPurchaseOrder);
router.get('/:id', authenticateToken, purchaseOrderController.getPurchaseOrder);
router.get('/', authenticateToken, purchaseOrderController.getPurchaseOrders);
router.get("/statusPo", purchaseOrderController.getStatusPo);
router.put('/:id', authenticateToken, purchaseOrderController.updatePurchaseOrder);
router.delete('/:id', authenticateToken, purchaseOrderController.deletePurchaseOrder);

module.exports = router;
