const helpersFile = require("./routes/helpers_file.js")
//Initiates all cards at beginning of game
newGame();
//Check which player has the higher card PER TURN
checkCards(testDB);
//Check final score after game is played
checkFinalScore(testDB);
//Shuffles a random diamond card and discards it
shuffleDiamond();
