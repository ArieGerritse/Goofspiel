exports.up = function(knex, Promise) {
  return knex.schema.createTable("user_data", (table) => {
    table.increments();
    table.string('Username');
    table.string('Email');
    table.string('Password');
  })
  knex.schema.createTable("game_history", (table) => {
    table.increments();
    table.string('User1_ID');
    table.string('User2_ID');
    table.string('Winner');
    table.date('Date');
  })
  knex.schema.createTable("game_goofspiel", (table) => {
    table.increments();
    table.string('Last Move Player');
    table.string('List of Previous Movies');
  })
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dser_data', 'game_history', 'game_goofspiel');
};
