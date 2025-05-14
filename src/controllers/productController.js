const productService = require('../services/productService');

exports.createProduct = async (req, res) => {
    try {
        const product = await productService.createProduct(
            req.body
        );
        res.status(201).json(product);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.getProduct = async (req, res) => {
    try {
        const product = await productService.getProduct(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'Product not fount' });
        }
        res.json(product);

    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

exports.getProducts = async (req, res) => {
    try {
        const product = await productService.getProducts();
        res.json(product);

    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const product = await productService.updateProduct(
            req.params.id,
            req.body);
        if (!product) {
            return res.status(404).json({ error: 'Product not fount' });
        }
        res.json(product);
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const product = await productService.deleteProduct(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'Product not fount' });
        }
        res.json(product);
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}