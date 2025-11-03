const orderService = require('../services/orderService');

exports.createOrder = async (req, res) => {
    try {
        const order = await orderService.createOrder(
            req.body
        );
        res.status(201).json(order);
    }
    catch (error) {
        console.log(error.message)
        res.status(400).json({ error: error.message });
    }
}

exports.getOrder = async (req, res) => {
    try {
        const order = await orderService.getOrder(req.params.id);
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }
        res.json(order);
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

exports.getOrders = async (req, res) => {
    try {
        const orders = await orderService.getOrders();
        res.json(orders);

    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

exports.getOrdersList = async (req, res) => {
    try {
        const orders = await orderService.getOrdersList(req.params.statusOrderId);
        res.json(orders);

    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

exports.getStatusOrder = async (req, res) => {
    try {
        const statusOrder = await orderService.getStatusOrder(req.params.active);
        res.json(statusOrder);

    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

exports.updateOrder = async (req, res) => {
    try {
        const order = await orderService.updateOrder(
            req.params.id,
            req.body);
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }
        res.json(order);
    }
    catch (error) {
        console.log(error.message)
        return res.status(400).json({ error: error.message });
    }
}

exports.deleteOrder = async (req, res) => {
    try {
        const order = await orderService.deleteOrder(req.params.id);
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }
        res.json(order);
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
