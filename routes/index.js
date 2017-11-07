const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get( '/users/:name', function (req, res) {
    var name = req.params.name;
    var list = tweetBank.find({name: name});
    //console.log(list);
    res.render('index', {tweets: list});
  //console.log( req.params.name ); // --> 'nimit'
});

router.get( '/tweets/:tweetId', function (req, res) {
    var list = tweetBank.find({id: Number.parseInt(req.params.tweetId)});
    res.render('index', {tweets: list});
});

module.exports = router;
