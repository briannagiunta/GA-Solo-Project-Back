const cocktailController = require('../controllers/cocktailController');
const express = require('express');
const cocktailRoutes = express.Router();

cocktailRoutes.post('/', cocktailController.addOne);
cocktailRoutes.put('/saved', cocktailController.getSaved)
cocktailRoutes.delete('/:userId/delete/:drinkId', cocktailController.delete)





module.exports = cocktailRoutes;