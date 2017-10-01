exports.seed = function(knex, Promise) {
  return knex('game_hand').del()
    .then(function() {
      return Promise.all([
        knex('game_hand').insert({
          game_id: 1,
          user_id: 1,
          score: 39
        }),
        knex('game_hand').insert({
          game_id: 1,
          user_id: 2,
          score: 35
        }),
        knex('game_hand').insert({
          game_id: 1,
          user_id: 3,
          score: 20
        }),
        knex('game_hand').insert({
          game_id: 1,
          user_id: 4,
          score: 5
        }),
        knex('game_hand').insert({
          game_id: 2,
          user_id: 5,
          score: 37
        }),
        knex('game_hand').insert({
          game_id: 2,
          user_id: 6,
          score: 25
        }),
        knex('game_hand').insert({
          game_id: 2,
          user_id: 7,
          score: 39
        })
      ]);
    });
};
