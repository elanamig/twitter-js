const express = require( 'express' );
const app = express(); // creates an instance of an express applicatio

app.listen(3000, () => {
    console.log("Up and running on 3000");
});

app.use('/', (req, res, next )=>{
    console.log(req.method + ' '+req.url + ' '+res.statusCode);
    next ();
});

app.use ('/special', (req, res, next) => {
    console.log("Reached special");
    next();
})

app.get('/', (req, res) => {
    res.send("got get");
});

