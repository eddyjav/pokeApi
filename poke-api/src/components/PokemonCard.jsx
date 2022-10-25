import { Link } from "react-router-dom"


export const PokemonCard = ({ 
    nombre,
    img,
    descripcion,
    page,
 }) => {
  return (    
    <div className="card w-72 mb-6 h-auto mx-auto bg-base-100 shadow-lg  shadow-gray-900/75">
        <img className="card-img" src={img} alt={ nombre } />
            <div className="card-body text-center items-center">
                <div className="card-title">
                    <h2 className=" first-letter:uppercase">{ nombre }</h2>
                </div>
            <p className="h-[90px] w-[224px] wrapP">
                { descripcion}
            </p>            
            <Link className="btn" to={`/pokemon/${ nombre }`} page={ page }>
                Mas Detalles
            </Link>
        </div>
    </div>
  )
}
