const express = require('express');
const router = express.Router();
const controller = require('../controllers/index');

router.get('/users', controller.getAllUsers);
router.post('/users', controller.createUser);
router.post('/users/login', controller.loginUser); // <--- Agrega esta línea

module.exports = router;