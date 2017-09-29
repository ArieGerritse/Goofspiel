exports.up = function(knex) {
  return knex.schema.table("user", (table) => {
    table.dropColumn('is_dealer');
    table.boolean('dealer_check');
  });
};
exports.down = function(knex) {
  return knex.schema.table("user", (table) => {
    table.dropColumn('dealer_check');
    table.integer('is_dealer');
  });
};
