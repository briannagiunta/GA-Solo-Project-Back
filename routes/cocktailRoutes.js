const cocktailController = require('../controllers/cocktailController');
const express = require('express');
const cocktailRoutes = express.Router();

cocktailRoutes.post('/', cocktailController.addOne);
cocktailRoutes.get('/saved', cocktailController.getSaved)





module.exports = cocktailRoutes;