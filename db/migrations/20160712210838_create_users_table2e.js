exports.up = function(knex, Promise) {

  return knex.schema.dropTable('users');
};

exports.down = function(knex, Promise) {
  return knex.schema.createTable("users", (table) => {
    table.integer('gameid');
  });
};
