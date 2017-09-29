exports.up = function(knex, Promise) {

  return knex.schema.createTable("player", (table) => {
    table.increments();
    table.integer('games_won');
    table.boolean('dealer_check');

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('player');
};
