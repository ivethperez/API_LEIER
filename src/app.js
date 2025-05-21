const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

// Permitir solicitudes desde el frontend en localhost:5173
app.use(cors({
    origin: 'https://snacksleier.com',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  }));
  
app.use(express.json());

app.use('/api', routes);

app.get('/', (req,res) =>{
  res.send('Hola mundo');
});

module.exports = app;