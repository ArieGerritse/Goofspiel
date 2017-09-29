exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function() {
      return Promise.all([
        knex('users').insert({
          id: 1,
          games_won: 5,
          dealer_check: false
        }),
        knex('users').insert({
          id: 2,
          games_won: 1,
          dealer_check: false
        }),
        knex('users').insert({
          id: 3,
          games_won: 2,
          dealer_check: false
        }),
        knex('users').insert({
          id: 4,
          games_won: 8,
          dealer_check: true
        })
      ]);
    });
};
