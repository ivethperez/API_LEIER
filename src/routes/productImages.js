const {Router} = require('express');
const productImageController = require('../controllers/productImageController');
const authenticateToken = require('../middlewares/auth');
const multer = require('multer')

const router = Router();

// Configuración multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "/tmp"),
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, uniqueSuffix + path.extname(file.originalname));
    },
  });

  const upload = multer({ storage });

router.post('/', authenticateToken, productImageController.createProductImage);
router.get('/:id', authenticateToken, productImageController.getProductImage);
router.get('/', authenticateToken, productImageController.getProductImages);
router.put('/', authenticateToken,upload.array("images[]"), productImageController.updateProductImage);
router.delete('/:id', authenticateToken, productImageController.deleteProductImage);

module.exports = router;
