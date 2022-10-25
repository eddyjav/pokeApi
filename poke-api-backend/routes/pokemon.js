const { Router } = require('express');
const { getAllPokemon, getPokemonByName, getPokemonPagination } = require('../controller/pokemon');
const router = Router();



router.get('/pokemon/:name', getPokemonByName);


router.get('/pokemon/', getPokemonPagination);




module.exports = router;