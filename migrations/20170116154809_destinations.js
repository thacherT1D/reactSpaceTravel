'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('destinations', (table) => {
    table.increments();
    table.string('name').notNullable().defaultTo('');
    table.string('type').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('destinations');
};
