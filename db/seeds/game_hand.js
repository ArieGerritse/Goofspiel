exports.seed = function(knex, Promise) {
  return knex('game_hand').del()
    .then(function() {
      return Promise.all([
        knex('game_hand').insert({
          id: 1,
          game_id: 1,
          user_id: 2,
          score: 35
        }),
        knex('game_hand').insert({
          id: 2,
          game_id: 1,
          user_id: 3,
          score: 20
        }),
        knex('game_hand').insert({
          id: 3,
          game_id: 1,
          user_id: 4,
          score: 35
        })
      ]);
    });
};
