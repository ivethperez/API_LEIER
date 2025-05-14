const priceProductService = require('../services/priceProductService');

exports.createPriceProduct = async (req, res) => {
    try {
        const priceProduct = await priceProductService.createPriceProduct(
            req.body
        );
        res.status(201).json(priceProduct);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.getPriceProduct = async (req, res) => {
    try {
        const priceProduct = await priceProductService.getPriceProduct(req.params.id);
        if (!priceProduct) {
            return res.status(404).json({ error: 'Price product not fount' });
        }
        res.json(priceProduct);

    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

exports.getPriceProducts = async (req, res) => {
    try {
        const priceProduct = await priceProductService.getPriceProducts();
        res.json(priceProduct);

    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

exports.updatePriceProduct = async (req, res) => {
    try {
        const priceProduct = await priceProductService.updatePriceProduct(
            req.params.id,
            req.body);
        if (!priceProduct) {
            return res.status(404).json({ error: 'Price Product not fount' });
        }
        res.json(priceProduct);
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

exports.deletePriceProduct = async (req, res) => {
    try {
        const priceProduct = await priceProductService.deletePriceProduct(req.params.id);
        if (!priceProduct) {
            return res.status(404).json({ error: 'Price Product not fount' });
        }
        res.json(priceProduct);
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}