'use strict';

const mongoose = require('mongoose');

let Superhero = mongoose.model('Superhero', {
  name: String,
  powers:[String],
  nemesis: String,

});

module.exports = Superhero;
