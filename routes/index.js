var express = require('express');
var router = express.Router();
var Brew = require('./models/brew.model.js');

router.get('/brew', function(request, response) {
    Brew.find(function(err, brews){
        if(err) response.send('error getting brews');
        response.send(brews);
    });
});

router.post('/brew', function(request, response) {
    var brew = new Brew({name: request.body.name});
    brew.save(function(err, brew){
        if(err) {
            response.send('error saving ' + brew.name);
        }
        response.send(brew);
    });
});

exports = router;