const { User } = require('../models');

// Obtener todos los usuarios
const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener usuarios', error });
    }
};

// Crear un nuevo usuario
const createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear usuario', error });
    }
};

// Login de usuario
const loginUser = async (req, res) => {
  const { username, password, role } = req.body;
  console.log('Datos recibidos:', { username, password, role }); // <-- Agrega esto
  try {
    const user = await User.findOne({ where: { username, password, role } });
    console.log('Usuario encontrado:', user); // <-- Y esto
    if (user) {
      res.status(200).json({ message: 'Login exitoso', user });
    } else {
      res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error en el login', error });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  loginUser, // <--- Exporta la función
};