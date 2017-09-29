exports.seed = function(knex, Promise) {
  return knex('player').del()
    .then(function() {
      return Promise.all([
        knex('player').insert({
          id: 1,
          games_won: 0,
          dealer_check: true
        }),
        knex('player').insert({
          id: 2,
          games_won: 1,
          dealer_check: false
        }),
        knex('player').insert({
          id: 3,
          games_won: 2,
          dealer_check: false
        }),
        knex('player').insert({
          id: 4,
          games_won: 8,
          dealer_check: false
        })
      ]);
    });
};
