import { pokemonsApi } from "../../api/pokemonsApi";
import { getingPokemons, loadingPokemons } from "./pokemonSlice"


export const getPokemons = ( limit = 10, skip= 0 ) => {
    try {
        return async( dispath, getState) => {

            // const { page } = getState().pokemons;
             
            dispath(loadingPokemons());
            // const dat = await pokemonsApi.get(`http://localhost:5000/api/pokemon/?limit=10&skip=4`); 
            const { data } = await pokemonsApi.get(`/pokemon/?limit=${ limit }&skip=${ skip }`);        
            // console.log(data)
            // dispath( getingPokemons({ pokemons: data.results, page: page + 1 }));
            dispath( getingPokemons({ pokemons: data.pokemons, page: skip }));
            //console.log(page);
    
        }   
    } catch (error) {
        console.log(error)
    }    
}

export const getPokemonsByName = ( name = '', page = 0 ) =>{
     name= name.toLocaleLowerCase().trim();
     if( name.length === 0) return[];
     let nopoke = ""
     
     return async( dispath ) => {
        dispath(loadingPokemons());

        const { data } = await pokemonsApi.get(`/pokemon/${ name }`)
        if( data.pokemon.length === 0) return "no"
        // console.log(data.pokemon)
        //console.log(data.results);
        // const pokeJ = JSON.stringify(data.pokemons);
        // console.log("BY_NAME")
        // console.log(data.pokemon)
        //console.log(pokeJ)
        dispath( getingPokemons({ pokemons: data.pokemon, page: page }));
        
        
        // return data.pokemons.filter(
        //     pokemon => pokemon.nombre.toLocaleLowerCase().includes( name )           
        //   );

    }    

}