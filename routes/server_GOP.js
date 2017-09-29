const helpersFile = require("./routes/helpers_file.js")
//Initiates all cards at beginning of game
newGame();



checkCards(testDB);
checkFinalScore(testDB);
selectFull();
