var express = require('express'),
    app = express(),
    passport = require('passport'),
    bodyParser  = require('body-parser'),
    mongoose = require('mongoose');


//db connection
var uristring =
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost/brewapp';

mongoose.connect(uristring, function (err, res) {
    if (err) {
        console.log ('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
        console.log ('Succeeded connected to: ' + uristring);
    }
});
//models
var BrewSchema = mongoose.Schema({
   name: String
});

var Brew = mongoose.model('Brew', BrewSchema);


//node server config
app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));
//app.use(passport.initialize());
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

///Routing
app.get('/brew', function(request, response) {
    Brew.find(function(err, brews){
        if(err) response.send('error getting brews');
        response.send(brews);
    });
});

app.post('/brew', function(request, response) {
    console.log(request.body.name);
    console.log(request.body);
    console.log(request.headers);
    var brew = new Brew({name: request.body.name});

    brew.save(function(err, brew){
        if(err) {
            response.send('error saving ' + brew.name);
        }
        response.send(brew);
    });
});


//start server
app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'));
});

