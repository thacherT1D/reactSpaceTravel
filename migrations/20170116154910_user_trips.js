'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('user_trips', (table) => {
    table.increments();
    table.integer('user_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table.integer('trip_id')
      .references('id')
      .inTable('trips')
      .onDelete('CASCADE')
      .index();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('user_trips');
};
