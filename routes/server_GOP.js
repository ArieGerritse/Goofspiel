  //All available cards to draw from; no clubs as are only 3 suits are used
  const suits = ["diamonds", "hearts", "spades"];
  const cardNum = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  function drawCard(cardsArray) {
    var currCard = 0;
    var swapCard = 0;
    var temp = null;
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

  /*

    function addScore() {



    }


    function pickWinner {} {



    }


    function ifTie() {




    }
  */
