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
      const userId = req.body.userId
      userCocktails.forEach((added) => {
            const associationId = added.addedCocktailId
            const user = added.userId
            allAddedCocktails.forEach((drink) => {
              const cocktailId = drink.id
              if(associationId === cocktailId && user == userId){
                  response.push(drink)
              }
          })
      })
      res.json(response)
    } catch (error) {
      res.json({error});
    }
  }


  addedCocktailController.delete = async (req,res) => {
      try {
          let user = await models.user.findOne({
              where:{
                  id: req.params.userId
              }
          })
          let addedCocktail = await models.addedCocktail.findOne({
              where:{
                  id: req.params.drinkId
              }
          })
          await user.removeAddedCocktail(addedCocktail)
          res.json({message: 'deleted'})
      } catch (error) {
          
      }
  }



module.exports = addedCocktailController;