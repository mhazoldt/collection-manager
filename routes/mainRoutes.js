var express = require('express')
var router = express.Router()

let pokemonController = require('../controllers/pokemonController')


// define the home page route
router.get('/', pokemonController.show)

router.get('/pokemon/new', pokemonController.new)

router.post('/pokemon/create', pokemonController.create)

router.get('/pokemon/edit/:name', pokemonController.edit)

router.post('/pokemon/edit/:name', pokemonController.update)

router.get('/pokemon/delete/:name', pokemonController.delete)



module.exports = router