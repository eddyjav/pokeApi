
const Pokemon = require('../models/Pokemon');

exports.getPokemonByName = async (req, res) => {   
   const pokemon = await Pokemon.find({ nombre:`${req.params.name}`});   

    res.json({
        ok:true,
        pokemon        
    });    
}

exports.getAllPokemon = async (req,res) => {
    const allPokemons = await Pokemon.find();
    res.json({
        ok:true,
        allPokemons
    })
}

exports.getPokemonPagination = async (req, res) =>{    
    const limit = req.query.limit ? parseInt(req.query.limit) : 0 ;
    const skip = req.query.skip ? parseInt(req.query.skip) : 0;

    const pokemons = await Pokemon.find()
                                    .skip(skip)
                                    .limit(limit);
    res.status(200).json({
        ok: true,
        pokemons
    })
}

