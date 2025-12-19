const purchaseOrderService = require('../services/purchaseOrderService');

exports.createPurchaseOrder = async (req, res) => {
    try {
        const purchaseOrder = await purchaseOrderService.createPurchaseOrder(
            req.body
        );
        res.status(201).json(purchaseOrder);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.getPurchaseOrder = async (req, res) => {
    try {
        const purchaseOrder = await purchaseOrderService.getPurchaseOrder(req.params.id);
        if (!purchaseOrder) {
            return res.status(404).json({ error: 'Purchase Order not found' });
        }
        res.json(purchaseOrder);
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

exports.getPurchaseOrders = async (req, res) => {
    try {
        const purchaseOrders = await purchaseOrderService.getPurchaseOrders();
        res.json(purchaseOrders);

    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

exports.getStatusPo = async (req, res) => {
    try {
        const statusPo = await purchaseOrderService.getStatusPo();
        res.json(statusPo);

    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

exports.updatePurchaseOrder = async (req, res) => {
    try {
        const purchaseOrder = await purchaseOrderService.updatePurchaseOrder(
            req.params.id,
            req.body);
        if (!purchaseOrder) {
            return res.status(404).json({ error: 'Purchase Order not found' });
        }
        res.json(purchaseOrder);
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

exports.deletePurchaseOrder = async (req, res) => {
    try {
        const purchaseOrder = await purchaseOrderService.deletePurchaseOrder(req.params.id);
        if (!purchaseOrder) {
            return res.status(404).json({ error: 'Purchase Order not found' });
        }
        res.json(purchaseOrder);
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
