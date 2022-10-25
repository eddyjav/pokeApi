const { Schema, model } = require('mongoose');

const PokemonSchema = Schema({
    id: {
        type: String,
        require: true,
        unique: true
    },
    nombre: {
        type: String
    },
    tipo: {
        type: [String],        
    },
    altura: {
        type: Number
    },
    peso:{
        type: Number
    },
    evolucion:{
        type: String
    },
    descripcion:{
        type: String
    },
    img:{
        type: String
    },
    estadisticas:[
        {
            nombre:{
                type: String
            },
            base:{
                type: String
            }
        }
    ]
});

module.exports = model( 'Pokemon', PokemonSchema );