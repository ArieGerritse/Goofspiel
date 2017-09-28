exports.up = function(knex, Promise) {
  return knex.schema.createTable("User Data", (table) => {
    table.increments();
    table.string('Username');
    table.string('Email');
    table.string('Password');
  })
  knex.schema.createTable("Game History", (table) => {
    table.increments();
    table.string('User1_ID');
    table.string('User2_ID');
    table.string('Winner');
    table.date('Date');
  })
  knex.schema.createTable("Game: Goofspiel", (table) => {
    table.increments();
    table.string('Last Move Player');
    table.string('List of Previous Movies');
  })
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('User Data', 'Game History', 'Game: Goofspiel');
};
