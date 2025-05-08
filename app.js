require('dotenv').config();
const express = require('express');
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const LoggerMiddleware = require('./middlewares/logger')
const errorHandler = require('./middlewares/errorHandler')
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
      res.status(201).json({ message: 'Usuario creado', data: newUser });
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

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
}); 