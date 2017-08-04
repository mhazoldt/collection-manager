const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/pokedex');
let Pokemon = require('../models/pokemonModel')


exports.show = function(req, res, next) {
    console.log("pokemonController.show--")
    Pokemon.find()
        .then((data) => {
            data = {"data": data}
            renderIndex(data, req, res, next)
        
        })
        .catch(renderIndex);
}

exports.new = function(req, res, next) {
    res.render("new")
}


exports.create = function(req, res, next) {
    console.log("pokemonController.create--")
    var pokemon = new Pokemon({name: req.body.pokemonName});
    pokemon.level = req.body.pokemonLevel
    pokemon.save()
    console.log(pokemon)
    res.redirect('/')
}

exports.update = function(req, res, next) {
    Pokemon.findOne({ name: req.params["name"] }, function (err, doc){
        doc.name = req.body.pokemonName;
        doc.visits.$inc();
        doc.save();
});
}

exports.edit = function (req, res, next) {
    let data = {}
    Pokemon.findOne({ name: req.params["name"] }, function (err, doc){
        console.log(doc)
        data = {"data": doc}
        console.log("pokemonContoller.edit--")
        console.log(data)
        res.render("edit", data)  
    });
      
}

exports.delete = function(req, res, next) {
    Pokemon.deleteOne({name: req.params["name"]}, function (err) {
        res.redirect('/')
    })
}

function renderIndex(data, req, res, next) {
    console.log("from render index--")
    console.log(data)
    res.render("index", data)
}