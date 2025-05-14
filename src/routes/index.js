const {Router, request} = require('express');
const authRouter = require('./auth');
const products = require('./products');
const priceProducts = require('./priceProducts');

const router = Router();

router.use('/auth', authRouter);
router.use('/products', products);
router.use('/priceProducts', priceProducts);

module.exports = router;