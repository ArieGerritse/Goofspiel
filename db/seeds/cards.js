exports.seed = function(knex, Promise) {
  return knex('cards_played').del()
    .then(function() {
      return Promise.all([
        knex('cards_played').insert({
          id: 1,
          hand_id: 1,
          value: 6
        }),
        knex('cards_played').insert({
          id: 2,
          hand_id: 2,
          value: 7
        }),
        knex('cards_played').insert({
          id: 3,
          hand_id: 3,
          value: 3
        }),
        knex('cards_played').insert({
          id: 4,
          hand_id: 1,
          value: 8
        }),
        knex('cards_played').insert({
          id: 5,
          hand_id: 2,
          value: 10
        }),
        knex('cards_played').insert({
          id: 1,
          hand_id: 3,
          value: 12
        })
      ]);
    });
};
