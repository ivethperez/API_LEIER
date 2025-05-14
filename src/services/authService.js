const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const registerUser = async (Nombre, Contrase_a, Telefono) => {
  const hashedPassword = await bcrypt.hash(Contrase_a, 10);
  const newUser = await prisma.usuarios.create({
    data: { 
        Nombre,
        Contrase_a : hashedPassword, 
        RoleId:1,
        CreadoFecha : new Date(),
        Telefono }
  });
  return newUser;
};

const loginUser = async (Telefono, Contrase_a) => {
  const user = await prisma.Usuarios.findFirst({ where: { Telefono } });
  if (!user) {
    throw new Error('Invalido telefono o contraseña');
  }
  const validPassword = await bcrypt.compare(Contrase_a, user.Contrase_a);
  if (!validPassword) {
    throw new Error('Invalido telefono o contraseña');
  }
  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '4h' }
  );
  return token;
};

module.exports = { registerUser, loginUser };