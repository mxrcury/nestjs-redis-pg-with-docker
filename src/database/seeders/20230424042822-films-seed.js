'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('films', [
      {
        title: 'Avatar',
        description: 'Good movie',
        releaseYear: 2022,
        rating: 9,
        length: 7200,
      },
      {
        title: 'Odyssey',
        description: 'Fantastic movie',
        releaseYear: 2023,
        rating: 9,
        length: 7200,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('films', null, {});
  },
};
