'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class addedCocktail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.addedCocktail.belongsToMany(models.user, {through: 'userAddedCocktail'})
    }
  };
  addedCocktail.init({
    name: DataTypes.STRING,
    picUrl: DataTypes.STRING,
    instructions: DataTypes.STRING,
    ingredient1: DataTypes.STRING,
    ingredient2: DataTypes.STRING,
    ingredient3: DataTypes.STRING,
    ingredient4: DataTypes.STRING,
    ingredient5: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'addedCocktail',
  });
  return addedCocktail;
};