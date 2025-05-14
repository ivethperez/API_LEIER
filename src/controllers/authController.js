const { registerUser, loginUser } = require('../services/authService');

const register = async (req, res) => {
  try {
    const {Nombre, Contrase_a } = req.body;
    await registerUser(Nombre, Contrase_a);
    return res.status(201).json({ message: 'User registered Successfully' });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { Telefono, Contrase_a } = req.body;
    const token = await loginUser(Telefono, Contrase_a);
    return res.json({ token });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = { register, login };