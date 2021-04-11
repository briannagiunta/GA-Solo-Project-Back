'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('cocktails', 'ingredient2', {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn('cocktails', 'ingredient3', {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn('cocktails', 'ingredient4', {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn('cocktails', 'ingredient5', {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn('cocktails', 'instructions', {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn('cocktails', 'picUrl', {
        type: Sequelize.STRING,
        allowNull: true,
      }),
    ]);


    /**
     *
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.removeColumn('cocktails', 'ingredient2')],
    [queryInterface.removeColumn('cocktails', 'ingredient3')],
    [queryInterface.removeColumn('cocktails', 'ingredient4')],
    [queryInterface.removeColumn('cocktails', 'ingredient5')],
    [queryInterface.removeColumn('cocktails', 'instructions')],
    [queryInterface.removeColumn('cocktails', 'picUrl')]
    
    
    );
    
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
