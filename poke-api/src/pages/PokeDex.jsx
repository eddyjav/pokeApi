import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";
import { getPokemons, getPokemonsByName } from "../store/slices/thunk";
import { PokemonCard } from "../components/PokemonCard";
import pokespin from "../assets/img/pokeball.svg";


export const PokeDex = () => {

  const { isLoading, pokemons, page } = useSelector( state => state.pokemons);
  
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();
  
  const { q = ''} = queryString.parse( location.search );



  const showBtnAll = ( q.length === 0 );
  let showBtnAllSearch = ( q.length === 0 );
  const showBtnBck = ( page === 0 );
  const showBtnNxt = ( page === 150 );
  
  useEffect(() => {
    if(q.length > 0) {
      dispatch(getPokemonsByName( q, page ));      
    }else{
      dispatch(getPokemons( 10, page ));
    }
  }, [q])  
  
  //*Search
  const [searchValue, setSearchValue] = useState('');
  const handleSearchValue = (e) => {    
    setSearchValue(e.target.value);    
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if( searchValue.length <=1 ) return;
    setSearchValue('');    
    const noPoke = await dispatch(getPokemonsByName(searchValue, page));
    if(noPoke =='no') {
      console.log("NOPOKE");    
      return navigate("nopokemon")
    }
    navigate(`?q=${ searchValue.toLowerCase().trim() }`);    
  }

     const onCloseSearch = () =>{
    navigate(-1);
  }

  return (
    <>  
    {
      isLoading ? 
      <div className="container flex justify-center items-center min-h-screen  ">        
          <img src={pokespin} className="animate-spin h-80 w-80" /> 
      </div>  
      :       
      <div className="todos"> 
      <div className="container mx-auto text-center items-center">
        <h1 className="font-bold text-4xl p-3">PokeAPI Challenge</h1>
        <p className="text-base">Colección de los 150 Pokémon de la primera generación, 
          míralos todos o busca tu favorito
        </p>
      </div>
        <div className="form-control m-3">
            <form className="mx-auto"  onSubmit={ handleSubmit }>
              <div className="input-group">
                <input className="input input-bordered"
                  type="text" 
                  placeholder="Busca tú pokemon"
                  name="searchValue"
                  value={ searchValue }
                  onChange={ handleSearchValue }
                />
                <button className="btn btn-square ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
              </div>
            </form>
          </div>        
          
        
        <div className=" flex flex-wrap justify-between mx-auto ">
          {          
              pokemons.map(( pokemon )=>(              
              <PokemonCard key={ pokemon.nombre }
                        { ...pokemon } page={page}
              > </PokemonCard>
            ))    
             
          }
        </div>
        <div className="text-center mx-auto">
          <div className="btn-group ">
            <button className="btn btn-primary "
              disabled={showBtnBck || isLoading}
              onClick = { () => dispatch((getPokemons(10, (page - 10))) )}
              style={{ display: showBtnAll ? '' : 'none' }}
            >
              Back
            </button>
            <button className="btn btn-accent"
              disabled={showBtnNxt || isLoading}
              onClick = { () => dispatch((getPokemons(10, (page + 10))) )} 
              style={{ display: showBtnAll ? '' : 'none' }}         
            >
              Next
            </button>          
          </div>
            <button className="transition duration-150 ease-in-out btn btn-secondary btn-circle "
              disabled={isLoading}
              onClick = { onCloseSearch }
              style={{ display: showBtnAllSearch ? 'none' : '' }}
            >
              x
            </button>    
        </div>
    </div> 
    }       
        
    </>
  )
}
