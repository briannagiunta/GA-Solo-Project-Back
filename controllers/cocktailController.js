const models = require('../models')

const cocktailController = {}

cocktailController.addOne = async (req,res) => {
    try {
      const newCocktail = await models.cocktail.findOrCreate({where: {
        webId: req.body.webId
      }
      })
      res.json({message: 'You got it girl, heres your new cocktail', newCocktail})
    } catch (error) {
      res.json({error})
    }
}

cocktailController.getSaved = async (req,res) => {
    try {
      let response = []
      const savedCocktails = await models.userCocktail.findAll()
      const allCocktails = await models.cocktail.findAll()
      savedCocktails.forEach((saved) => {
        const savedcocktail = saved.cocktailId
        allCocktails.forEach((cocktail) => {
          if(savedcocktail === cocktail.id){
            response.push(cocktail.webId)
          }
        })
  
      })
      res.json(response)
    } catch (error) {
      console.log(error);
    }
  
  }

module.exports = cocktailController;