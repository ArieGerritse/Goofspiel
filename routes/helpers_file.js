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
/*
  function addTurnScore() {



  }


  function pickWinner {} {



  }


  function ifTie() {




  }
*/

function populateDealer(hand_id) {

  for (let i = 1; i <= 13; i++) {
    knex.insert({
        hand_id: `${hand_id}`,
        value: `${i}`
      }).into('cards_played')
      .then(function(id) {
        select2(hand_id);
      });
  }
}
