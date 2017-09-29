"use strict";

require('dotenv').config();

const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const express = require("express");
const bodyParser = require("body-parser");
const sass = require("node-sass-middleware");
const app = express();

const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);
const morgan = require('morgan');
const knexLogger = require('knex-logger');

function selectFull(stuff) {
  return knex('cards_played')
    .select('value')
    .innerJoin('game_hand', 'game_hand.id', 'cards_played.hand_id')
    .where('hand_id', stuff)
    .then((results) => {
      console.log(results);
    });
}

function select(id) {
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

function select2(id) {
  knex('user')
    .select('games_won')
    .where('id', id)
    .then((results) => {

      console.log(results);
    });
}
