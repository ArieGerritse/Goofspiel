module.exports = function newGame() {
  const user1 = suits[0];
  const user2 = suits[1];
};

//Check which player has the higher card PER TURN

module.exports = function checkCards(testDB) {
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
//Check final score after game is played
module.exports = function checkFinalScore(testDB) {
  let winner;
  if (testDB.user1_score > testDB.user2_score) {
    winner = 'user1_score';
    return winner + ': ' + testDB.user1_score;
  }
  if (testDB.user1_score < testDB.user2_score) {
    winner = 'user2_score';
    return winner + ': ' + testDB.user2_score;
  }
  if (testDB.user1_score === testDB.user2_score) {
    //ifTie();
  }
};
//Shuffles a random diamond card and discards it
module.exports = function shuffleDiamond(diamondCards) {
  let card;
  for (let pCard = 0; pCard < 13; pCard++) {
    card = Math.floor(Math.random() * (diamondCards.length));
  }
  return diamondCards.splice(card, 1)[0];
};
//Selects all cards being played by GIVEN ID param
module.exports = function selectFull(stuff) {
  return knex('cards_played')
    .select('value')
    .innerJoin('game_hand', 'game_hand.id', 'cards_played.hand_id')
    .where('hand_id', stuff)
    .then((results) => {
      console.log(results);
    });
};
//Selects dealer's card by hand_id, and shuffles them
module.exports = function select(id) {
  let temp = [];
  knex('cards_played')
    .select('value')
    .where('hand_id', id)
    .then((results) => {
      for (let cards in results) {
        temp.push(results[cards].value);
      }
      shuffleDiamond(temp);
    });
}

module.exports = function select2(id) {
  knex('user')
    .select('games_won')
    .where('id', id)
    .then((results) => {

      console.log(results);
    });
}

/*
  function addTurnScore() {



  }


  function pickWinner {} {



  }


  function ifTie() {




  }
*/
