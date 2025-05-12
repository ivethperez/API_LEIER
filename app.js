require('dotenv').config();
const express = require('express');
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const LoggerMiddleware = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');
const authenticateToken = require('./middlewares/auth')
const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, 'users.json');

const app = express();
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(LoggerMiddleware);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>API de Productos Leier</h1>
    <p>Esto es una aplicación Node.js con Express.js</p>
    <p>Corre en el puerto ${PORT}</p>
  `);
});

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Mostrar información del usuario con Id: ${userId}`);
});

app.get('/search', (req, res) => {
  const { q } = req.query;
  const category = req.query.categoria || 'Todas';
  res.send(`Buscar productos con la palabra: ${q}
    <p>Categoría: ${category}</p>`);
});

app.post('/form', (req, res) => {
  const { name, email } = req.body;
  res.json({ message: 'Usuario creado:' ,
    data: {
      name,
      email
    }
  });
});

app.post('/api/data', (req, res) => {
  const data = req.body;
  if(!data || Object.keys(data).length === 0) {
    return res.status(400).json({ message: 'No se proporcionaron datos' });
  }
  res.status(201).json({ 
    message: 'Usuario creado:',
    data
  });
});

app.get('/users', (req, res) => {
  fs.readFile(usersFilePath, 'utf-8', (err, data) => {
    if(err) {
      return res.status(500).json({ message: 'Error al leer el archivo de usuarios' });
    }
    const users = JSON.parse(data);
    res.json(users);
  });
  
});

app.post('/users', (req, res) => {
  const newUser = req.body;
  fs.readFile(usersFilePath, 'utf-8', (err, data) => {
    if(err) {
      return res.status(500).json({ message: 'Error al leer el archivo de usuarios' });
    }
    const users = JSON.parse(data);
    users.push(newUser);
    fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), 'utf-8', (err) => {
      if(err) {
        return res.status(500).json({ message: 'Error al escribir el archivo de usuarios' });
      }
      res.status(201).json({ message: 'Usuario creado' });
    });
  });
});

app.put('/users/:id', (req, res) => {
  const userId = parseInt( req.params.id,10);
  const updatedUser = req.body; //Obtener el cuerpo de la estructura
  fs.readFile(usersFilePath, 'utf8', (err, data) => {
    if(err) {
      return res.status(500).json({ message: 'Error al leer el archivo de usuarios' });
    }
    let users = JSON.parse(data);
    users = users.map(user => user.id === userId ? {...user, ...updatedUser} : user);
    
    fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), (err) => {
      if(err) {
        return res.status(500).json({ message: 'Error al escribir el archivo de usuarios' });
      }
      res.json({ message: 'Usuario actualizado', data: updatedUser });
    });
    
  });
});

app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  fs.readFile(usersFilePath, 'utf8', (err, data) => {
    if(err) {
      return res.status(500).json({ message: 'Error al leer el archivo de usuarios' });
    }
    let users = JSON.parse(data);
    users = users.filter(user => user.id !== userId);
    fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), 'utf8', (err) => {
      if(err) {
        return res.status(500).json({ message: 'Error al escribir el archivo de usuarios' });
      }
      res.json({ message: 'Usuario eliminado', data: users });
    });
  });
});

app.get('/error',(req,res,next) =>{
  next(new Error('Error intencionado'));
});

app.get('/db-almacenes', async(req,res)=>{
  try{
    const almacenes = await prisma.almacenes.findMany();
    res.json(almacenes);
  }
  catch(error){
    res.status(500).json({error: 'Error de conexión'})
  }
});

app.get('/protected-route', authenticateToken, (req,res) =>{
  res.send('Esta es una ruta protegida');
});

app.post('/register', async (req, res) => {
  const {Nombre, Contrase_a } = req.body;
  if (!Nombre || !Contrase_a ) {
    return res.status(400).json({ message: 'La contraseña es obligatoria' });
  }
  const hansedPassword = await bcrypt.hash(Contrase_a ,10);

  const newUser  = await prisma.usuarios.create({
    data:{
      Nombre,
      Contrase_a : hansedPassword, 
      RoleId:1,
      CreadoFecha : new Date()
    }
  });
      res.status(201).json({ message: 'Usuario creado' });
});

app.post('/login', async (req,res) =>{
  const { Contrase_a, Telefono } = req.body;
  const user = await prisma.usuarios.findFirst({where:{Telefono}});

  if(!user)
    return res.status(400).json({error:'Invalid telefono o contraseña'});
  const validatePassword = await bcrypt.compare(Contrase_a , user.Contrase_a);

  if(!validatePassword)
    return res.status(400).json({error:'Invalid telefono o contraseña'});

  const token = jwt.sign({id: user.Id}, process.env.JWT_SECRET,{expiresIn : '4h'});

  res.json({token});
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
}); 