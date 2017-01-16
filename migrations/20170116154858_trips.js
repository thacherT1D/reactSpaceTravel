'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('trips', (table) => {
    table.increments();
    table.string('name').notNullable().defaultTo('');
    table.string('details').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('trips');
};
