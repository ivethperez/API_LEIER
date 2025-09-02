const userService = require('../services/userService');

exports.getUser = async (req, res) => {
    try {
        const user = await userService.getUser(req.params.Correo);
        if (!user) {
            return res.status(404).json({ error: 'User not fount' });
        }
        res.json(user);

    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}