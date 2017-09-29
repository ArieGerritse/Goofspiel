exports.seed = function(knex, Promise) {
  return knex('current_game').del()
    .then(function() {
      return Promise.all([
        knex('current_game').insert({
          winner: '',
          turn_count: 13
        })
      ]);
    });
};
