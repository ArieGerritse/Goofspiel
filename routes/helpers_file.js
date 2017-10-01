module.exports = function newGame(user1, user2) {
  populateDealer();
  shuffleDiamond();
  selectDiamond();
  populateCurrentGame();
};

module.exports = function everyTurn() {
  selectDiamond();
  checkCards();
  addTurnScore();
  splitHands(game_id, user1_id, user2_id);
  checkFinalScore(game_id)

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
module.exports = function selectWinner() {
  knex('current_game')
    .select('winner', 'turn_count')
    .where('id')
    .update({
      winner: winnerVar //waiting for winner variable to be passed
    })
    .then((results) => {
      console.log(results);
    });
}

//Incraments winners' games_won to update latest result
module.exports = function incramentWinner() {
  knex('player')
    .select('games_won')
    .where('id', winnerVar) //waiting for winner variable to be passed
    .update({
      games_won: games_won++
    })
    .then((results) => {
      console.log(results);
    });
}

//Check which player has the higher card PER TURN
module.exports = function checkCards() {
  let winner;
  if (testDB.user1_card > testDB.user2_card) {
    winner = 'user1_card';
    return winner + ': ' + testDB.user1_card;
  }
  if (testDB.user1_card < testDB.user2_card) {
    winner = 'user2_card';
    return winner + ': ' + testDB.user2_card;
  }
  if (testDB.user1_card === testDB.user2_card) {
    //ifTie();
  }
};
//Check final score after game is played, and delete row of finished game
module.exports = function checkFinalScore(game_id) {
  let winner;
  knex('game_hand')
    .select('user_id', 'score')
    .where('game_id', game_id)
    .then((results) => {
      if (results[1].score > results[2].score) {
        winner = results[1].score;
        console.log(winner);
        return winner + ': ' + results[1].score;
      }
      if (results[1].score < results[2].score) {
        winner = results[2].score;
        console.log(winner);
        return winner + ': ' + results[2].score;
      }
      if (results[1].score === results[2].score) {
        //ifTie();
      }
    });
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
}
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



function pickWinner(winner) {
  checkFinalScore(testDB);

}

/*function clearTable(){



}*/

/*function ifTurnTie() {




}


function matchmaking(){



}
*/
