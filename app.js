const express = require( 'express' );
const app = express(); // creates an instance of an express applicatio
const nunjucks = require('nunjucks');
const routes = require('./routes');
const bodyParser = require('body-parser')
const socketio = require('socket.io');

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});


const server = app.listen(3000, () => {
    console.log("Up and running on 3000");
});


const io = socketio.listen(server);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static('public'));
app.use('/', routes(io));
