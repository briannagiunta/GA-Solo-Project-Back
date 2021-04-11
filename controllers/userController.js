const models = require('../models')

const userController = {}


//takes in info from front end creates a new user in the users table/ sends back new user info
userController.signUp = async (req,res) => {
    try {
      const newUser = await models.user.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      })
      res.json({message: 'You got it girl, heres your new user', newUser})
    } catch (error) {
      res.status(400)
      res.json({error: 'You used that email already, silly.'})
    }
}

//takes in info from front end and finds the user by email / if passwords match, sends back user info / if they dont, sends back error message
userController.login = async (req,res) => {
    try {
      const user = await models.user.findOne({
        where: {
          email: req.body.email
        }
      })
      if(user.password === req.body.password){
        res.json({message: 'login successful', user: user})
      }else{
        res.status(401)
        res.json({error: 'Password is incorrect'})
      }
    } catch (error) {
       res.status(400)
       res.json({error: 'login failed'})
    }
}

userController.getUserProfile = async (req, res) => {  
    try {
      const user = await models.user.findOne({
        where: {
          id: req.headers.authorization
        }
      })
      res.json({ user })
    } catch (error) {
      res.status(404).json({ error: 'User profile not found' })
    }
  }

  userController.saveCocktail = async (req,res) => {
    try {
        const user = await models.user.findOne({
            where:{
                id: req.body.userId
            }
        })
        const cocktail = await models.cocktail.findOne({
            where:{
                id: req.body.drinkId
            }
        })
        const newAssociation = await user.addCocktail(cocktail)
        res.json({message: 'user saved cocktail', newAssociation})
    } catch (error) {
        res.json({error})
    }
}



module.exports = userController;

