import { useMemo } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getPokemonsByName } from "../store/slices/thunk";


export const Pokemon = () => {

  // console.log(page);
  const dispatch = useDispatch();
  const { nombre } = useParams();
  const navigateBack = useNavigate();

  let pokemon = [];
  let stats = [];
  
  const { isLoading, pokemons, page } = useSelector( state => state.pokemons  );

  if(pokemons.length > 0){
    pokemon = pokemons[0];    
  }

  const { id, tipo, altura, peso, evolucion, descripcion, img, estadisticas   } = pokemon;
   
  if(!!estadisticas){
    stats = estadisticas;    
  }

// *ENG to ES stats
  const stat = stats.map( st =>{    
      if( st.nombre == "hp")return {...st, nombre:"❤️ Vida"}      
      if( st.nombre == "attack")return {...st,nombre:"⚔️ Ataque"}      
      if( st.nombre == "defense")return {...st,nombre:"🛡️ Defensa"}      
    }                                                
  )

  const onBackNavigate = () =>{
    navigateBack(-1);
  }

  useEffect(() => {
    dispatch(getPokemonsByName(nombre,page));
  }, [])  

  if( pokemons.length === 0) return <Navigate to="/" />
  
 

  return (
    <>
    <div className="container mx-auto  md:mt-6  ">
      <div className="card md:card-side bg-base-100 shadow-xl  shadow-gray-900/75">
          <figure><img className="w-max" src={img} alt="Album"/></figure>
          <div className="card-body gap-0">
            <div className="card-title">
            <h2 className="first-letter:uppercase text-3xl">{ nombre }</h2>
            </div>
            <ul >
              <li >{descripcion}</li>
              <li><b>Tipo:</b> {tipo.join(', ')}</li>
              <li><b>Altura:</b> {altura}m</li>
              <li><b>Peso:</b> {peso}kg</li>
              <li><b>Evolución:</b> {evolucion}</li>
              <ul>       
                {
                  stat.map( s => {
                    return  <li key={s.nombre}><b>{s.nombre}: </b>{s.base}</li>
                  })
                }
              </ul>
            </ul>
            
            <div className="card-actions justify-start ">
              <button 
                className="btn btn-primary"
                onClick={onBackNavigate}  >
                Regresar
              </button>
            </div>
          </div>
      </div>
    </div>
      
    </>
  )
}
