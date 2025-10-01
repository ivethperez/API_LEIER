const {Router} = require('express');
const paymentMethodController = require('../controllers/paymentMethodController');
const authenticateToken = require('../middlewares/auth');

const router = Router();

router.get('/:id', authenticateToken, paymentMethodController.getPaymentMethod);
router.get('/', authenticateToken, paymentMethodController.getPaymentMethods);

module.exports = router;
