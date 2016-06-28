'use strict';
const express = require('express');
let router = express.Router();

// get to api/samurais

router.use('/names', require('./names'))


module.exports = router;
