
const Pokemon = require('../models/Pokemon');

exports.getPokemonByName = async (req, res) => {   

    try {
        const pokemon = await Pokemon.find({ nombre:`${req.params.name}`});        

        res.status(200).json({
            ok:true,
            pokemon        
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg: 'Error con en servidor - Hable con el Admin'
        });
    }
    
       
}

exports.getAllPokemon = async (req,res) => {
    try {
        const allPokemons = await Pokemon.find();
        res.status(200).json({
            ok:true,
            allPokemons
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg: 'Error con en servidor - Hable con el Admin'
        });
    }
    
}

exports.getPokemonPagination = async (req, res) =>{  
    try {       

        if( isNaN(req.query.limit) || isNaN(req.query.skip) ){
            return res.status(400).json({
                ok:false,
                msg: 'Datos enviados incorrectos'
            })
        }

        const limit = req.query.limit ? parseInt(req.query.limit) : 0 ;
        const skip = req.query.skip ? parseInt(req.query.skip) : 0;

        const pokemons = await Pokemon.find()
                                        .skip(skip)
                                        .limit(limit);
        res.status(200).json({
            ok: true,
            pokemons
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg: 'Error con en servidor - Hable con el Admin'
        });
    }  
    
}