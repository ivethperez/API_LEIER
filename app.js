const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>API de Productos Leier</h1>
    <p>Esto es una aplicación Node.js con Express.js</p>
    <p>Corre en el puerto ${PORT}</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
}); 