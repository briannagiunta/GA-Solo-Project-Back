const models = require('../models')

const addedCocktailController = {}


addedCocktailController.addOne = async (req,res) => {
    try {
      const newCocktail = await models.addedCocktail.create({
        name: req.body.name,
        picUrl: req.body.picUrl,
        instructions: req.body.instructions,
        ingredient1: req.body.ingredient1,
        ingredient2: req.body.ingredient2,
        ingredient3: req.body.ingredient3,
        ingredient4: req.body.ingredient4,
        ingredient5: req.body.ingredient5
      })
      res.json({message: 'You got it girl, heres your new cocktail', newCocktail})
    } catch (error) {
      res.json({error})
    }
}

addedCocktailController.getAdded = async (req,res) => {
    try {
        let response = []
      const userCocktails = await models.userAddedCocktail.findAll()
      const allAddedCocktails = await models.addedCocktail.findAll()
    //   console.log(userCocktails.addedCocktailId);
      userCocktails.forEach((added) => {
          const associationId = added.addedCocktailId
          allAddedCocktails.forEach((drink) => {
              const cocktailId = drink.id
              if(associationId === cocktailId){
                  response.push(drink)
              }
          })
      })
      res.json(response)
    } catch (error) {
      console.log(error);
    }
  
  }



module.exports = addedCocktailController;