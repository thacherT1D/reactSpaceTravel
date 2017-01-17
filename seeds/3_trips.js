'use strict';

exports.seed = function(knex) {
  return knex('trips').del()
    .then(() => {
      return knex('trips').insert([{
        id: 1,
        name: 'Moon Unit Zappa',
        details: 'Perfect for a first time trip',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 2,
        name: 'June on Jupiter',
        details: 'Spend the early summer meeting the friendly martians of Jupiter',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 3,
        name: 'Make it Rain on Mars',
        details: 'Visit the newest casino in the galaxy',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 4,
        name: 'Tri-Planet Trifecta',
        details: 'Visit Mars, Jupiter, and the Moon on a galaxy-wind tour over 2 weeks',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
      );
    });
};
