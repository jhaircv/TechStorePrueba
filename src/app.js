const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const db = require('./db');
const routes = require('./routes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const { sequelize } = require('./models');
// ...código existente...

sequelize.sync();

// Servir archivos estáticos (HTML, JS, CSS)
app.use(express.static(path.join(__dirname, '../public')));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurar rutas
app.use('/api', routes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});