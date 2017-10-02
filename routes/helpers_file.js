module.exports = function newGame(user1, user2) {
  populateDealer(hand_id);
  shuffleDiamond(diamondCards, hand_id);
  selectDiamond(hand_id);
  populateCurrentGame();
};

module.exports = function everyTurn() {
  selectDiamond();
  checkCards();
  splitHands(game_id, user1_id, user2_id);
  checkCards(game_id, diamond_card, user_id)
  checkFinalScore(game_id);

}
//Selects each user in a game
module.exports = function selectUser() {
  let temp = [];
  knex('game_hand')
    .select('game_id', 'user_id', 'score')
    .where('game_id', 1)
    .then((results) => {
      for (let user in results) {
        temp.push(results[user]);
      }
    });
}
//Populates the hand of a player in a game
module.exports = function populateHandTable(game_id, user_id) {
  knex.insert({
      game_id: `${game_id}`,
      user_id: `${user_id}`,
      score: `0`
    }).into('game_hand')
    .then(function(id) {});
}
//Populates hands of both players
module.exports = function splitHands(game_id, user1_id, user2_id) {

  populateHandTable(game_id, user1_id);
  populateHandTable(game_id, user2_id);
}
//Selects all cards being played by GIVEN ID param
module.exports = function selectFull(stuff) {
  knex('cards_played')
    .select('value')
    .innerJoin('game_hand', 'game_hand.id', 'cards_played.hand_id')
    .where('hand_id', stuff)
    .then((results) => {});
};
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
//Incraments winners' games_won to update latest result
function incramentWinner(winner) {
  knex('player')
    .select('games_won')
    .where('id', winner) //winner variable to be passed
    .increment('games_won', 1)
    .then((results) => {});
}

//Check which player has the higher card PER TURN
function checkCards(game_id, diamond_card, user_id) {
  let winner;
  knex('game_hand')
    .select('card_value', 'turn_count', 'user_id')
    .where('game_id', game_id)
    .then((results) => {
      if (results[1].card_value > results[2].card_value) {
        winner = results[1].user_id;
      }
      if (results[1].card_value < results[2].card_value) {
        winner = results[2].user_id;
      }
      if (results[1].card_value === results[2].card_value) {
        //ifTie();
      }
      // return winner;
      addTurnScore(game_id, winner, diamond_card);
    })
  knex('game_hand')
    .select('turn_count')
    .where('user_id', user_id)
    .increment('turn_count', 1) //increment turn_count by one for current game and player
    .then((results) => {});
};
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
};
//Check final score after game is played, and delete row of finished game
module.exports = function checkFinalScore(game_id) {
  let winner;
  knex('game_hand')
    .select('user_id', 'score')
    .where('game_id', game_id)
    .then((results) => {
      if (results[1].score > results[2].score) {
        winner = results[1].user_id;
        //return winner + ': ' + results[1].score;
      }
      if (results[1].score < results[2].score) {
        winner = results[2].user_id
        //return winner + ': ' + results[2].score;
      }
      if (results[1].score === results[2].score) {
        //ifTie();
      }
      incramentWinner(winner);
      selectWinner(game_id, winner);
      return winner;
    })
  knex('game_hand')
    .where('game_id', game_id)
    .del().asCallback((result) => {});
};
//Shuffles a random diamond card and discards it
module.exports = function shuffleDiamond(diamondCards, hand_id) {
  let card = Math.floor(Math.random() * (diamondCards.length));
  //Deletes row of card played
  knex('cards_played')
    .del()
    .where({
      hand_id: hand_id,
      value: diamondCards[card]
    }).asCallback((result) => {});
};
//Selects dealer's card by hand_id, and shuffles them
module.exports = function selectDiamond(hand_id) {
  let temp = [];
  knex('cards_played')
    .select('value')
    .where('hand_id', hand_id)
    .then((results) => {
      for (let cards in results) {
        temp.push(results[cards].value);
      }
      shuffleDiamond(temp, hand_id);
    });
};
//rank thing for now
/*module.exports = function select2(id) {
  knex('user')
    .select('games_won')
    .where('id', id)
    .then((results) => {

      console.log(results);
    });
}*/
//Populates dealer's (diamond) cards at the beginning of the game
module.exports = function populateDealer(hand_id) {

  for (let i = 1; i <= 13; i++) {
    knex.insert({
        hand_id: `${hand_id}`,
        value: `${i}`
      }).into('cards_played')
      .then(function(id) {});
  }
};
//Populates current game with 13 cards and leaves winner blank
module.exports = function populateCurrentGame() {

  for (let i = 1; i <= 13; i++) {
    knex.insert({
        winner: ``,
        turn_count: `${i}`
      }).into('current_game')
      .then(function(id) {});
  }
}


/*function addTurnScore() {



}*/


/*function ifTurnTie() {




}


function matchmaking(){



}
*/
