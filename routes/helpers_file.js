module.exports = function newGame(user1, user2) {
  populateDealer();
  shuffleDiamond();
  selectDiamond();
  populateCurrentGame();
  //populateHand(user1);
  //populateHnad(user2);
};

module.exports = function everyTurn() {
  selectDiamond();
  checkCards();
  addTurnScore();


}
module.exports = function selectUser() {




}


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
      console.log(temp);
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
//Selects all cards being played by GIVEN ID param
module.exports = function selectFull(stuff) {
  knex('cards_played')
    .select('value')
    .innerJoin('game_hand', 'game_hand.id', 'cards_played.hand_id')
    .where('hand_id', stuff)
    .then((results) => {
      console.log(results);
    });
};


function addTurnScore() {



}



/*function pickWinner(winner) {
  checkFinalScore(testDB);

}*/


/*function ifTurnTie() {




}


function matchmaking(){



}
*/
