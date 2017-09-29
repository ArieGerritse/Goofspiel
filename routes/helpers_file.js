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

function selectFull() {
  return knex('cards_played')
    .select('value')
    .innerJoin('game_hand', 'game_hand.id', 'cards_played.hand_id')
    .where('id', 3);
}
//SELECT * FROM cards INNER JOIN( SELECT * FROM hands WHERE game_id = {params[:game_id]}
//AND player_id = {params[:player_id]})) AS a ON cards.hand_id = a.id WHERE active = 'true'


/*
  function addTurnScore() {



  }


  function pickWinner {} {



  }


  function ifTie() {




  }
*/
