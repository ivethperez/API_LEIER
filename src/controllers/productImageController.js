const productImageService = require('../services/productImageService');

exports.createProductImage = async (req, res) => {
    try {
        const productImage = await productImageService.createProductImage(
            req.body
        );
        res.status(201).json(productImage);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.getProductImage = async (req, res) => {
    try {
        const productImage = await productImageService.getProductImage(req.params.id);
        if (!productImage) {
            return res.status(404).json({ error: 'Product image not found' });
        }
        res.json(productImage);

    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

exports.getProductImages = async (req, res) => {
    try {
        const productId = req.query.productId;
        const productImages = await productImageService.getProductImages(productId);
        res.json(productImages);
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

exports.updateProductImage = async (req, res) => {
    try {
        const updates = [];
        for (let i = 0; i < req.files.length; i++) {
            const file = req.files[i];

            // Subir al FTP
            const remoteFileName = `public_html/img/${file.filename}`;
            await productImageService.uploadToFTP(file.path, remoteFileName);

            // Preparar data para Prisma
            updates.push({
                id: req.body[`id[${i}]`] || null,
                imageUrl: `${process.env.FTP_BASE_URL}/${file.filename}`,
                altText: req.body[`altText[${i}]`] || "",
                orderImage: parseInt(req.body[`orderImage[${i}]`] || 0, 10),
                active: req.body[`active[${i}]`] === "true",
                updateBy: req.body[`updateBy[${i}]`],
            });
        }
        const productImage = await productImageService.updateProductImage(updates);
        if (!productImage) {
            return res.status(404).json({ error: 'Product image not found' });
        }
        res.json({ success: true, images: result });
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

exports.deleteProductImage = async (req, res) => {
    try {
        const productImage = await productImageService.deleteProductImage(req.params.id);
        if (!productImage) {
            return res.status(404).json({ error: 'Product image not found' });
        }
        res.json(productImage);
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
