exports.up = function(knex, Promise) {

  return knex.schema.createTable("user", (table) => {
    table.increments();
    table.integer('games_won');
    table.integer('is_dealer');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};
