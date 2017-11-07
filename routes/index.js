const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get( '/users/:name', function (req, res) {
  res.render()
  console.log( req.params.name ); // --> 'nimit'
});


module.exports = router;
