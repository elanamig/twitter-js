const express = require( 'express' );
const app = express(); // creates an instance of an express applicatio
const nunjucks = require('nunjucks');

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});


app.listen(3000, () => {
    console.log("Up and running on 3000");
});


//nunjucks.render()

app.use('/', (req, res, next )=>{
    console.log(req.method + ' '+req.url + ' '+res.statusCode);
    next ();
});

app.use ('/special', (req, res, next) => {
    console.log("Reached special");
    next();
})

app.get('/', (req, res) => {
    res.render('index.html', {title: 'this is a title', people: [{name: 'Vasya'}, {name: 'Petya'}, {name: 'Masha'}]});
});

