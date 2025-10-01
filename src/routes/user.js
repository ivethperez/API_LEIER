const {Router} = require('express');
const userController = require('../controllers/userController');
const authenticateToken = require('../middlewares/auth');

const router = Router();

router.get('/:email', authenticateToken, userController.getUser);

module.exports = router;