var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/beers');

var Beer = require("./model/BeerModel");

var app = express();

//parse application/json
app.use(bodyParser.json());   // This is the type of body we're interested in
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

//connect public folder to server
app.use(express.static(__dirname + '/public'));
app.use('/scripts', express.static( __dirname + '/node_modules/'));

/*app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html");
});*/

//example
/*app.get('/beers', function (req, res) {
  res.json({beers: [
    { name: '512 IPA', style: 'IPA', image_url: 'http://bit.ly/1XtmB4d', abv: 5 },
    { name: '512 Pecan Porter', style: 'Porter', image_url: 'http://bit.ly/1Vk5xj4', abv: 4 }
  ]});
});*/

app.get('/beers', function (req, res) {
  Beer.find(function (error, beers) {
    res.send(beers);
    console.log(beers);
  });
});

app.post('/beers', function (req, res, next) {

  console.log(req.body);

  var beer = new Beer(req.body);

  beer.save(function(err, beer) {
    if (err) { return next(err); }

    res.json(beer);
  });
});

app.listen(8000, function(){
  console.log('listening');
});

