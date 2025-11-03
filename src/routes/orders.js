const {Router} = require('express');
const orderController = require('../controllers/orderController');
const authenticateToken = require('../middlewares/auth');

const router = Router();

router.post('/', authenticateToken, orderController.createOrder);
router.get('/:id', authenticateToken, orderController.getOrder);
router.get('/', authenticateToken, orderController.getOrders);
router.get('/orderslist/:statusOrderId', authenticateToken, orderController.getOrdersList);
router.get("/statusOrder/:active", orderController.getStatusOrder);
router.put('/:id', authenticateToken, orderController.updateOrder);
router.delete('/:id', authenticateToken, orderController.deleteOrder);

module.exports = router;
