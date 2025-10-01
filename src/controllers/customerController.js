const customerService = require('../services/customerService');

exports.createCustomer = async (req, res) => {
    try {
        const customer = await customerService.createCustomer(
            req.body
        );
        res.status(201).json(customer);
    }
    catch (error) {
        console.log(error.message)
        res.status(400).json({ error: error.message });
    }
}

exports.getCustomer = async (req, res) => {
    try {
        const customer = await customerService.getCustomer(req.params.id);
        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }
        res.json(customer);
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

exports.getCustomers = async (req, res) => {
    try {
        const customers = await customerService.getCustomers();
        res.json(customers);

    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

exports.updateCustomer = async (req, res) => {
    try {
        const customer = await customerService.updateCustomer(
            req.params.id,
            req.body);
        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }
        res.json(customer);
    }
    catch (error) {
        console.log(error.message)
        return res.status(400).json({ error: error.message });
    }
}

exports.deleteCustomer = async (req, res) => {
    try {
        const customer = await customerService.deleteCustomer(req.params.id);
        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }
        res.json(customer);
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

