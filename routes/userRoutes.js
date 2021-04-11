const userController = require('../controllers/userController');
const express = require('express');
const userRoutes = express.Router();

userRoutes.post('/', userController.signUp)
userRoutes.post('/login', userController.login)
userRoutes.get('/profile', userController.getUserProfile)
userRoutes.put('/save', userController.saveCocktail)






module.exports = userRoutes;

