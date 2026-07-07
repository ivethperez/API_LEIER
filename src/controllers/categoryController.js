const categoryService = require('../services/categoryService');

exports.createCategory = async (req, res) => {
    try {
        const category = await categoryService.createCategory(
            req.body
        );
        res.status(201).json(category);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.getCategory = async (req, res) => {
    try {
        const category = await categoryService.getCategory(req.params.id);
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.json(category);

    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

exports.getCategories = async (req, res) => {
    try {
        const isProducts = req.query.products === 'true';
        const categories = await categoryService.getCategories(isProducts);
        res.json(categories);
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

exports.updateCategory = async (req, res) => {
    try {
        const category = await categoryService.updateCategory(
            req.params.id,
            req.body);
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.json(category);
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

exports.deleteCategory = async (req, res) => {
    try {
        const category = await categoryService.deleteCategory(req.params.id);
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.json(category);
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
