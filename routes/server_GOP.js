    //All available cards to draw from; no clubs as are only 3 suits are used
    const suits = ["hearts", "spades"];
    const cardNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
    //Initiates all cards at beginning of game
    function newGame() {
      const diamondCards = shuffCards(cardNum);
      const user1 = suits[0];
      const user2 = suits[1];
    }
    //Shuffles the diamond cards at the BEGINNING of the round
    function shuffleCards(cardsArray) {
      let currCard = 0;
      let swapCard = 0;
      let temp = null;
      //runs while there are cards in deck, shuffles all but picked card
      for (currCard = cardsArray.length - 1; currCard > 0; currCard--) {
        swapCard = Math.floor(Math.random() * currCard);
        //swap picked card with current
        temp = cardsArray[currCard];
        cardsArray[currCard] = cardsArray[swapCard];
        cardsArray[swapCard] = temp;
      }
      return cardsArray;
    }
    //Check which player has the higher card PER TURN
    function checkCards(testDB) {
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
    }
    //Check final score after game is played
    function checkFinalScore(testDB) {
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
    }

    /*
      function addTurnScore() {



      }


      function pickWinner {} {



      }


      function ifTie() {




      }
    */
