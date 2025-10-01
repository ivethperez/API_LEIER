const {Router, request} = require('express');
const authRouter = require('./auth');
const products = require('./products');
const priceProducts = require('./priceProducts');
const user = require('./user');
const categories = require('./categories');
const productImages = require('./productImages');
const customers = require('./customers');
const sales = require('./sales');
const paymentMethods = require('./paymentMethods');

const router = Router();

router.use('/auth', authRouter);
router.use('/products', products);
router.use('/priceProducts', priceProducts);
router.use('/user', user);
router.use('/categories', categories);
router.use('/productImages', productImages);
router.use('/customers', customers);
router.use('/sales', sales);
router.use('/paymentMethods', paymentMethods);

module.exports = router;