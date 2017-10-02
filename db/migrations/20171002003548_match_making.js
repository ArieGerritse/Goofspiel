exports.up = function(knex, Promise) {
  return knex.schema.createTable('match_making', function(table) {
    table.integer('player_id');
  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('match_making');
};
