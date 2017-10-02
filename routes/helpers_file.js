module.exports = {

  everyTurn: function(game_id, user_id, played_card, diamond_card) {

    let diamond;
    let tie;
    let scores;
    let op_card;

    let return_values = [];

    if (incrementHands(game_id) === 1) {
      diamond = selectDiamond(game_id);
      tie = checkCards(game_id, diamond_card, user_id);
      scores = selectScore(game_id, user_id);
      op_card = checkFinalScore(game_id);

      return_values.push(diamond).push(tie).push(scores).push(op_card);
      return return_values;
    } else {
      do {
        let user1_turn = 0;
        let user2_turn = 0;

        setTimeout(function(game_id) {

          knex('game_hand')
            .select('turn_count')
            .where('game_id', game_id)
            .then((results) => {

              user2_turn = results[0].turn_count;
              user1_turn = results[1].turn_count;
            });


        }, 1000);

      } while (user1_turn !== user2_turn);

      return_values.push(diamond).push(tie).push(scores).push(op_card);

    }
  },

  match_making: function(player_id) {

    knex.insert({
      player_id: player_id
    }).into('match_making').then((results) => {});

    let players_looking;

    do {
      knex('match_making')
        .select('*')
        .then((results) => {
          players_looking = results.length;
          if (results.length >= 2) {

            return newGameInTable(results[0].player_id, results[0].player_id);


          } else {
            setTimeout(function() {}, 3000);
          }
        });
    } while (players_looking < 2);
  }
};

function newGameInTable(user1, user2) {

  knex.insert({
      winner: '',
      turn_count: 1
    }).into('current_game')
    .then((results) => {

      populateDealer(results[0].id);
      selectDiamond(results[0].id);
      splitHands(results[0].id, user1_id, user2_id);
      return results[0].id;

    });

}

//Selects each user in a game
function selectScore(game_id, user_id) {
  knex('game_hand')
    .select('score', 'user_id')
    .where('game_id', game_id)
    .then((results) => {
      if (results[0].user_id === user_id) {
        return [results[0].score, results[1].score];
      } else {
        return [results[1].score, results[0].score];
      }

    });
}
//Populates the hand of a player in a game
function populateHandTable(game_id, user_id) {
  knex.insert({
      game_id: `${game_id}`,
      user_id: `${user_id}`,
      score: `0`
    }).into('game_hand')
    .then(function(id) {});
}
//Populates hands of both players
function splitHands(game_id, user1_id, user2_id) {

  populateHandTable(game_id, user1_id);
  populateHandTable(game_id, user2_id);
}
//Selects all cards being played by GIVEN ID param
function selectFull(stuff) {
  knex('cards_played')
    .select('value')
    .innerJoin('game_hand', 'game_hand.id', 'cards_played.hand_id')
    .where('hand_id', stuff)
    .then((results) => {});
}
//Selects winner at the end of the game
function selectWinner(game, winner) {
  knex('current_game')
    .select('winner')
    .where('id', game)
    .update({
      winner: winner //winner variable to be passed
    })
    .then((results) => {});
}

function incrementHands(user_id, game_id) {
  knex('game_hand')
    .select('turn_count')
    .where({
      game_id: game_id,
      user_id: user_id
    })
    .increment('turn_count', 1) //increment turn_count by one for current game and player
    .then((results) => {});

  knex('game_hand')
    .select('turn_count')
    .where('game_id', game_id)
    .then((results) => {
      if (results[0].score === results[1].score) {
        return 1;
      } else {
        return null;
      }
    });
}

//Incraments winners' games_won to update latest result
function incramentWinner(winner) {
  knex('player')
    .select('games_won')
    .where('id', winner) //winner variable to be passed
    .increment('games_won', 1)
    .then((results) => {});
};
//Check which player has the higher card PER TURN
function checkCards(game_id, diamond_card, user_id) {
  let winner;
  knex('game_hand')
    .select('card_value', 'turn_count', 'user_id')
    .where('game_id', game_id)
    .then((results) => {
      if (results[1].card_value > results[2].card_value) {
        winner = results[1].user_id;
        addTurnScore(game_id, winner, diamond_card);
        tie = 0;
        return tie;
      }
      if (results[1].card_value < results[2].card_value) {
        winner = results[2].user_id;
        addTurnScore(game_id, winner, diamond_card);
        tie = 0;
        return tie;
      }
      if (results[1].card_value === results[2].card_value) {
        tie = 1;
        return tie;
      }
      // return winner;
    });
}
//Selects winner and adds the current_diamond value to their current score
function addTurnScore(game_id, winner, diamond_card) {
  knex('game_hand')
    .select('score')
    .where({
      game_id: game_id,
      user_id: winner
    })
    .increment('score', diamond_card)
    .then((results) => {});
}
//Check final score after game is played, and delete row of finished game
function checkFinalScore(game_id, user_id) {
  let winner;
  knex('game_hand')
    .select('user_id', 'score', 'turn_count')
    .where('game_id', game_id)
    .then((results) => {
      if (results[1].turn_count === 13 && results[0].turn_count === 13) {
        if (results[1].score > results[0].score) {
          winner = results[1].user_id;
          //return winner + ': ' + results[1].score;
        }
        if (results[1].score < results[0].score) {
          winner = results[0].user_id;
          //return winner + ': ' + results[2].score;
        }
        if (results[1].score === results[0].score) {}
        incramentWinner(winner);
        selectWinner(game_id, winner);
      }
      if (results[0].user_id !== user_id) {
        return results[0].card_value;
      } else {
        return results[1].card_value;
      }
    });
  knex('game_hand')
    .where('game_id', game_id)
    .del().asCallback((result) => {});
}

//Shuffles a random diamond card and discards it
function shuffleDiamond(diamondCards, game_id) {
  let card = Math.floor(Math.random() * (diamondCards.length));
  //Deletes row of card played
  knex('cards_played')
    .del()
    .where({
      hand_id: game_id,
      value: diamondCards[card]
    }).asCallback((result) => {
      return diamondCards[card];
    });
}
//Selects dealer's card by hand_id, and shuffles them
function selectDiamond(game_id) {
  let temp = [];
  knex('cards_played')
    .select('value')
    .where('hand_id', game_id)
    .then((results) => {
      for (let cards in results) {
        temp.push(results[cards].value);
      }
      return shuffleDiamond(temp, game_id);
    });
}

//Populates dealer's (diamond) cards at the beginning of the game
function populateDealer(hand_id) {
  for (let i = 1; i <= 13; i++) {
    knex.insert({
        hand_id: `${hand_id}`,
        value: `${i}`
      }).into('cards_played')
      .then(function(id) {});
  }
}
// //Populates current game with 13 cards and leaves winner blank
// function populateCurrentGame() {
//   for (let i = 1; i <= 13; i++) {
//     knex.insert({
//         winner: ``,
//         turn_count: `${i}`
//       }).into('current_game')
//       .then(function(id) {});
//   }
// };

function match_making(player_id) {
  knex.insert({
    player_id: `${player_id}`
  }).into('match_making').then(function(id) {});
  let players_looking;
  do {
    knex('match_making')
      .select('*')
      .then((results) => {
        players_looking = results.length;
        if (results.length >= 2) {
          clear_match_making();
          return null;
        } else {
          setTimeout(function() {}, 5000);
        }
      });
  } while (players_looking < 2);
}

function clear_match_making() {

  knex('match_making')
    .del()
    .select('*');

}
