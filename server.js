"use strict";

require('dotenv').config();

const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const express = require("express");
const bodyParser = require("body-parser");
const sass = require("node-sass-middleware");
const app = express();
const cookieSession = require('cookie-session');

const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);
const morgan = require('morgan');
const knexLogger = require('knex-logger');


// Seperated Routes for each Resource
// const usersRoutes = require("./routes/users");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.

app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

//Cookies sessions for user
app.use(cookieSession({
  name: 'session',
  keys: ['player']
}));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));

app.use(express.static("public"));

// Mount all resource routes
// app.use("/api/users", usersRoutes(knex));

// Home page
app.get("/", (req, res) => {
  let templateVars = {
    player_id: req.session.player
  };
  res.render("index", templateVars);
});

// Login with existing username
app.post("/login", (req, res) => {
  console.log(req.body.player);
  req.session.player = req.body.player;
  res.redirect("/");
});

app.get('/GOPS', (req, res) => {
  let templateVars = {
    player_id: req.session.player
  };
  res.render("game_page", templateVars);

});

app.get('/wait', (req, res) => {
  let templateVars = {
    player_id: req.session.player
  };
  res.render("wait", templateVars);
});

app.get('/GOPS/:id', (req, res) => {
  let templateVars = {
    player_id: req.session.player
  };
  res.render("play_gops", templateVars);
});

app.post('/GOPS/:id', (req, res) => {
  let url = req.params.id;
  let game_id = url.substring(0, 1);
  let user = req.session.player;
  let input = req.body.input;
  let diamond_card = req.body.diamond_card;
  let thing = everyTurn(game_id, user, input, diamond_card);
  res.json(thing);
});


// const game_routes = require("./routes/game_gop");

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
