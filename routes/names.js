'use strict';
const express = require('express');
let Superhero = require('../models/name')
let router = express.Router();

// get to api/superheros

router.get('/', (req,res) => {

  Superhero.find({}, (err, superheros) => {
    if(err) return res.status(400).send(err);

    res.send(superheros)
  })
})

router.post('/', (req,res) => {
  let superhero = new Superhero(req.body)

  superhero.save((err, savedDoc) => {
    if(err) return res.status(400).send(err);
    res.send(savedDoc)

  })
})


/// DELETE /api/superheros/:id
router.delete('/:id', (req,res) => {



  Superhero.remove({_id:req.params.id}, (err) => {
    console.log('arg2', arg2);
    res.status(err ? 400: 200).send(err);
  })
})

router.get('/:id',(req,res) => {
  Superhero.findById(req.params.id, (err,superhero) => {
    res.status(err ? 400: 200).send(err || superhero);
  })
})

router.put('/:id', (req,res) => {
  Superhero.findOneAndUpdate(req.params.id, {$set: req.body}, err => {
    res.status(err ? 400: 200).send(err);

  })
})

module.exports = router;
