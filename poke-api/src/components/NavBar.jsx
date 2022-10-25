import { Link } from "react-router-dom"
import fperfil from '../assets/img/fperfil_p.png';

export const NavBar = () => {
  return (
    
    <div className="navbar bg-base-300">
    <div className="flex-1">
    <Link to={"/"} className="btn btn-ghost normal-case text-xl">🏠Pokedex</Link>
    </div>
    <div className="flex-none gap-10">

      <label className="btn btn-ghost normal-case text-base"  htmlFor="my-modal-3">Contacto</label>
      <input type="checkbox" id="my-modal-3" className="modal-toggle " />      
      <div className="modal">        
          <div className="mockup-code">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <pre data-prefix="$"><code>npm i <b className="text-lg">contacto</b> </code></pre> 
            <pre data-prefix=">" className="text-warning"><code>installing...</code></pre> 
            <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
            <pre data-prefix=">" className="text-cyan-400"><code>🙋🏻‍♂️ <b>Nombre:</b> Javier Yánez </code></pre>
            <pre data-prefix=">" className="text-cyan-400"><code>📱 <b>Telefono:</b> 098 438 9301 </code></pre>
            <pre data-prefix=">" className="text-cyan-400"><code>📨 <b>Email:</b> eddy.j.av@gmail.com </code></pre>
          </div>        
      </div>

      <div className="avatar">        
        <label className="btn btn-link normal-case text-base"  htmlFor="my-modal-2">
          <div className="w-10 mask mask-squircle">
            <img  src={fperfil} />              
          </div>
        </label>        
      </div>
      <div className="container">
      <input type="checkbox" id="my-modal-2" className="modal-toggle " />
          <div className="modal">        
              <div className="mockup-code ">
              <label htmlFor="my-modal-2" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <pre data-prefix="$"><code>npm i <b className="text-lg">Acerca de mí</b> </code></pre> 
                <pre data-prefix=">" className="text-warning"><code>installing...</code></pre> 
                <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
                
                <pre data-prefix="~" className="text-cyan-400"><code>👋🏻 Hola mi nombre es Javier Yánez, 
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;soy 👨🏻‍💻analista de sistemas que gusta 
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;de la programación, actualmente estoy 
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fascinado con el mundo de 🚀JavaScript 
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y más aún con sus libreríasy frameworks
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;como Node, React, etc.
                </code></pre>
                
                
              </div>        
          </div>
      </div>
      
    </div>
  </div>
  
  )
}
