exports.up = function(knex, Promise) {

  return knex.schema.createTable("game_hand", (table) => {
      table.increments();
      table.integer('game_id');
      table.integer('user_id');
      talbe.integer('score');
    }),
    knex.schema.createTable("cards_played", (table) => {
      table.increments();
      table.integer('hand_id');
      talbe.integer('value');
    }),

    knex.schema.createTable("user", (table) => {
      table.increments();
      table.integer('games_won');
      table.integer('is_dealer');
    }),
    knex.schema.createTable("current_game", (table) => {
      table.increments();
      table.text('winner');
      table.integer('turn_count');
    });
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable();
};
