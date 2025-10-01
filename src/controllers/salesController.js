const salesService = require('../services/salesService');

exports.createSale = async (req, res) => {
    try {
        const sale = await salesService.createSale(
            req.body
        );
        res.status(201).json(sale);
    }
    catch (error) {
        console.log(error.message)
        res.status(400).json({ error: error.message });
    }
}

exports.getSale = async (req, res) => {
    try {
        const sale = await salesService.getSale(req.params.id);
        if (!sale) {
            return res.status(404).json({ error: 'Sale not found' });
        }
        res.json(sale);
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

exports.getSales = async (req, res) => {
    try {
        const sales = await salesService.getSales();
        res.json(sales);

    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
exports.getStatusSale = async (req, res) => {
    try {
        const statusSale = await salesService.getStatusSale();
        res.json(statusSale);

    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

exports.updateSale = async (req, res) => {
    try {
        const sale = await salesService.updateSale(
            req.params.id,
            req.body);
        if (!sale) {
            return res.status(404).json({ error: 'Sale not found' });
        }
        res.json(sale);
    }
    catch (error) {
        console.log(error.message)
        return res.status(400).json({ error: error.message });
    }
}

exports.deleteSale = async (req, res) => {
    try {
        const sale = await salesService.deleteSale(req.params.id);
        if (!sale) {
            return res.status(404).json({ error: 'Sale not found' });
        }
        res.json(sale);
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}