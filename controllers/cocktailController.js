const models = require('../models')

const cocktailController = {}

cocktailController.addOne = async (req,res) => {
    try {
      const newCocktail = await models.cocktail.findOrCreate({where: {
        webId: req.body.webId
      }
    })
    const user = await models.user.findOne({where:{
        id: req.body.userId
    }})
    const cocktail = await models.cocktail.findOne({where:{
        webId: req.body.webId
    }})
    let theMessage = "not saved"
    const users = await cocktail.getUsers()
    users.forEach((u) => {
        console.log([u.id , user.id]);
        if(u.id === user.id){
            theMessage = "saved"
        }
    })
    res.json({message: theMessage, newCocktail})
    } catch (error) {
      res.json({error})
    }
}

cocktailController.getSaved = async (req,res) => {
    try {
      let response = []
      const savedCocktails = await models.userCocktail.findAll()
      const allCocktails = await models.cocktail.findAll()
      const userId = req.body.userId
      savedCocktails.forEach((saved) => {
        const savedcocktail = saved.cocktailId
        const user = saved.userId
        allCocktails.forEach((cocktail) => {
          if(savedcocktail === cocktail.id && user == userId){
            response.push(cocktail.webId)
          }
        })
  
      })
      res.json(response)
    } catch (error) {
      console.log(error);
    }
  }

 cocktailController.delete = async (req,res) => {
    try {
        let user = await models.user.findOne({
            where:{
                id: req.params.userId
            }
        })
        let cocktail = await models.cocktail.findOne({
            where:{
                id: req.params.drinkId
            }
        })
        await user.removeCocktail(cocktail)
        res.json({message: 'deleted'})
    } catch (error) {
        
    }
}

module.exports = cocktailController;