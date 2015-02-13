var express = require('express'),
    app = express(),
    bodyParser  = require('body-parser'),
    mongoose = require('mongoose'),
    router = require('./routes/index.js');

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

//node server config
app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(app.router);
// Routes
app.get('/', routes.index);

//start server
app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'));
});

