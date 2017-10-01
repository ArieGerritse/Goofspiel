exports.seed = function(knex, Promise) {
  return knex('game_hand').del()
    .then(function() {
      return Promise.all([
        knex('game_hand').insert({
          game_id: 1,
          user_id: 1,
          score: 39,
          card_value: 2,
          turn_count: 3

        }),
        knex('game_hand').insert({
          game_id: 1,
          user_id: 2,
          score: 35,
          card_value: 6,
          turn_count: 5
        }),
        knex('game_hand').insert({
          game_id: 1,
          user_id: 3,
          score: 20,
          card_value: 9,
          turn_count: 11
        }),
        knex('game_hand').insert({
          game_id: 1,
          user_id: 4,
          score: 5,
          card_value: 1,
          turn_count: 5
        }),
        knex('game_hand').insert({
          game_id: 2,
          user_id: 5,
          score: 37,
          card_value: 8,
          turn_count: 7
        }),
        knex('game_hand').insert({
          game_id: 2,
          user_id: 6,
          score: 25,
          card_value: 12,
          turn_count: 13
        }),
        knex('game_hand').insert({
          game_id: 2,
          user_id: 7,
          score: 39,
          card_value: 4,
          turn_count: 9
        })
      ]);
    });
};
