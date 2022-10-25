import { useNavigate } from "react-router-dom";
import rafachu from "../assets/img/rafachu.png"


export const NoPokemon = ( {isLoading} ) => {

    const navigate = useNavigate();

    const onCloseSearch = () =>{
        navigate(-1);
      }

  return (
    <div className="card w-80 mt-6 h-auto mx-auto bg-base-100 shadow-lg  shadow-red-600/75">
              <figure><img className="w-64 h-64" src={rafachu} alt="Shoes" /></figure>
                <div className="card-body text-center">
                  <h2 className="card-title">El pokemon que buscas no existe!!</h2>                  
                  <div className="card-actions justify-end">
                  <button className="btn bg-red-600 btn-circle "
                    disabled={isLoading}
                    onClick = { onCloseSearch }                                      
                  >
                    OK!
                  </button>    
            </div>
        </div>
    </div>
  )
}
