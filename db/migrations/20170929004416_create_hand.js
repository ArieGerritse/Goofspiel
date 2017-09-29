exports.up = function(knex, Promise) {
  return knex.schema.createTable("game_hand", (table) => {
    table.increments();
    table.integer('game_id');
    table.integer('user_id');
    talbe.integer('score');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('game_hand');
};
