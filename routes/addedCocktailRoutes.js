const addedCocktailController = require('../controllers/addedCocktailController');
const express = require('express');
const addedCocktailRoutes = express.Router();

addedCocktailRoutes.post('/', addedCocktailController.addOne);
addedCocktailRoutes.get('/added', addedCocktailController.getAdded)


module.exports = addedCocktailRoutes;