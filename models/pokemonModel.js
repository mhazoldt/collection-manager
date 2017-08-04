const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');


const pokemonSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    pokemonType: {type: String},
    level: Number
})

module.exports = mongoose.model('Pokemon', pokemonSchema);

