const addedCocktailController = require('../controllers/addedCocktailController');
const express = require('express');
const addedCocktailRoutes = express.Router();

addedCocktailRoutes.post('/', addedCocktailController.addOne);
addedCocktailRoutes.put('/added', addedCocktailController.getAdded)
addedCocktailRoutes.delete('/:userId/delete/:drinkId', addedCocktailController.delete)


module.exports = addedCocktailRoutes;