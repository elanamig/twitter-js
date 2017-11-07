const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

module.exports = function (io) {

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true } );
});

router.get( '/users/:name', function (req, res) {
    var name = req.params.name;
    var list = tweetBank.find({name: name});
    //console.log(list);
    res.render('index', {tweets: list, showForm: true, showName: true});
  //console.log( req.params.name ); // --> 'nimit'
});

router.get( '/tweets/:tweetId', function (req, res) {
    var list = tweetBank.find({id: Number.parseInt(req.params.tweetId)});
    res.render('index', {tweets: list});
});

router.post('/tweets', function(req, res) {
  //console.log(req.body)
  var name = req.body.name;
  var text = req.body.text;
  var id = tweetBank.add(name, text);
  var x = tweetBank.find({id: id})
  //console.log(x[0])
  io.sockets.emit('newTweet', { tweet: x[0] });
});

return router;
};
