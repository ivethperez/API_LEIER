const paymentMethodService = require('../services/paymentMethodService');

exports.getPaymentMethod = async (req, res) => {
    try {
        const paymentMethod = await paymentMethodService.getPaymentMethod(req.params.id);
        if (!paymentMethod) {
            return res.status(404).json({ error: 'Payment method not found' });
        }
        res.json(paymentMethod);
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

exports.getPaymentMethods = async (req, res) => {
    try {
        const paymentMethods = await paymentMethodService.getPaymentMethods();
        res.json(paymentMethods);

    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
