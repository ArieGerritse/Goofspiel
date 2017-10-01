exports.up = function(knex, Promise) {

  return knex.schema.table("game_hand", (table) => {
    table.dropColumn('id');
    table.integer('card_value');
    table.integer('turn_count');

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("game_hand", (table) => {
    table.increments();
    table.dropColumn('card_value');
    table.dropColumn('turn_count');
  });
}
