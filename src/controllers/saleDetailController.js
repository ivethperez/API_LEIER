const saleDetailService = require('../services/saleDetailService');

exports.createSaleDetail = async (req, res) => {
    try {
        const saleDetail = await saleDetailService.createSaleDetail(
            req.body
        );
        res.status(201).json(saleDetail);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.getSaleDetail = async (req, res) => {
    try {
        const saleDetail = await saleDetailService.getSaleDetail(req.params.id);
        if (!saleDetail) {
            return res.status(404).json({ error: 'Sale Detail not found' });
        }
        res.json(saleDetail);
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

exports.getSaleDetails = async (req, res) => {
    try {
        const saleDetails = await saleDetailService.getSaleDetails(req.params.saleId);
        res.json(saleDetails);

    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

exports.getSaleDetailsBySale = async (req, res) => {
    try {
        const saleDetails = await saleDetailService.getSaleDetailsBySale(req.params.saleId);
        res.json(saleDetails);

    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

exports.updateSaleDetail = async (req, res) => {
    try {
        const saleDetail = await saleDetailService.updateSaleDetail(
            req.params.id,
            req.body);
        if (!saleDetail) {
            return res.status(404).json({ error: 'Sale Detail not found' });
        }
        res.json(saleDetail);
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

exports.deleteSaleDetail = async (req, res) => {
    try {
        const saleDetail = await saleDetailService.deleteSaleDetail(req.params.id);
        if (!saleDetail) {
            return res.status(404).json({ error: 'Sale Detail not found' });
        }
        res.json(saleDetail);
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
