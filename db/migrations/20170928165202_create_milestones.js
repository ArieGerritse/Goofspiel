exports.up = function(knex, Promise) {
  return knex.schema.createTable("User Data", (table) => {
    table.increments();
    table.string('Username');
    table.string('Email');
    table.string('Password');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('User Data');
};
