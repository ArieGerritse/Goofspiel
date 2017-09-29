exports.up = function(knex, Promise) {
  return knex.schema.createTable("cards_played", (table) => {
    table.increments();
    table.integer('hand_id');
    talbe.integer('value');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cards_played');
};
