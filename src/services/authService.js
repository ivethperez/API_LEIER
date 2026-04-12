const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const registerUser = async (name, password, phone, email) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await prisma.user.create({
    data: { 
        name: name,
        password : hashedPassword, 
        roleId:1,
        userLeier:1,
        phone:phone,
        email: email,
        active:true,
        createdAt : new Date() }
  });
  return newUser;
};

const loginUser = async (email, password) => {
  const user = await prisma.user.findFirst({ where: { email } });
  if (!user) {
    throw new Error('Invalido correo o contraseña');
  }
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    throw new Error('Invalido correo o contraseña');
  }
  const token = jwt.sign(
    { id: user.id, role: user.roleId },
    process.env.JWT_SECRET,
    { expiresIn: '4h' }
  );
  return token;

};

module.exports = { registerUser, loginUser };