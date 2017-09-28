exports.up = function(knex, Promise) {

  return knex.schema.createTable("game_data", (table) => {
    table.integer('gameid');
    table.integer('user1_id');
    table.integer('user2_id');
    table.integer('user1_card');
    table.integer('user2_card');
    table.integer('user1_score');
    table.integer('user2_score');
  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('game_data');
};
