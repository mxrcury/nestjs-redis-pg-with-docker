'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('films', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      releaseYear: { type: Sequelize.INTEGER, allowNull: false },
      rating: { type: Sequelize.INTEGER, allowNull: false },
      length: { type: Sequelize.INTEGER, allowNull: false },
    });
    queryInterface.bulk;
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable('Films');
  },
};
