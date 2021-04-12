'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userAddedCocktail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  userAddedCocktail.init({
    userId: DataTypes.INTEGER,
    addedCocktailId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'userAddedCocktail',
  });
  return userAddedCocktail;
};