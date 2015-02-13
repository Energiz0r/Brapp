var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BrewSchema = mongoose.Schema({
    name: String
});

module.exports = mongoose.model('Brew', BrewSchema);
