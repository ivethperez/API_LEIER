const {Router} = require('express');
const customerController = require('../controllers/customerController');
const authenticateToken = require('../middlewares/auth');

const router = Router();

router.post('/', authenticateToken, customerController.createCustomer);
router.get('/:id', authenticateToken, customerController.getCustomer);
router.get('/', authenticateToken, customerController.getCustomers);
router.put('/:id', authenticateToken, customerController.updateCustomer);
router.delete('/:id', authenticateToken, customerController.deleteCustomer);

module.exports = router;

