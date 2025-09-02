const {Router} = require('express');
const userController = require('../controllers/userController');
const authenticateToken = require('../middlewares/auth');

const router = Router();

router.get('/:Correo', authenticateToken, userController.getUser);

module.exports = router;