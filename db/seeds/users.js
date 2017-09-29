exports.seed = function(knex, Promise) {
  return knex('user').del()
    .then(function() {
      return Promise.all([
        knex('user').insert({
          id: 1,
          games_won: 1,
          dealer_check: false
        }),
        knex('user').insert({
          id: 2,
          games_won: 1,
          dealer_check: false
        }),
        knex('user').insert({
          id: 3,
          games_won: 2,
          dealer_check: false
        }),
        knex('user').insert({
          id: 4,
          games_won: 8,
          dealer_check: true
        })
      ]);
    });
};
