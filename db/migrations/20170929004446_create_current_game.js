exports.up = function(knex, Promise) {

  return knex.schema.createTable("current_game", (table) => {
    table.increments();
    table.text('winner');
    table.integer('turn_count');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('current_game');
};
