exports.up = function(knex, Promise) {

  return knex.schema.dropTable('game_data');
};

exports.down = function(knex, Promise) {

  return knex.schema.createTable("game_data", (table) => {
    table.increments();
  });

};
