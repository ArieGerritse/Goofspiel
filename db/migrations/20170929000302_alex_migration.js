exports.up = function(knex, Promise) {

  return knex.schema.createTable("user", (table) => {
      table.increments();
      table.integer('games_won');
      table.integer('is_dealer');
    }),
    knex.schema.createTable("current_game", (table) => {
      table.increments();
      table.text('winner');
      table.integer('turn_count');
    }),
    knex.schema.dropTable('User Data');
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('game_data', 'current_game', 'game_hand', 'cards_played');
};
