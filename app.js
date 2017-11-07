const express = require( 'express' );
const app = express(); // creates an instance of an express applicatio
const nunjucks = require('nunjucks');
const routes = require('./routes');

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});


app.listen(3000, () => {
    console.log("Up and running on 3000");
});

app.use(express.static('public'));
app.use('/', routes);

