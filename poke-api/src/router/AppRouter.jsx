import { Routes, Route } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { NoPokemon } from "../pages/NoPokemon";
import { PokeDex } from "../pages/PokeDex";
import { Pokemon } from "../pages/Pokemon";

export const AppRouter = () => {
  return (
    <>
    <NavBar />
      
      <Routes>
              <Route path="/" element={ <PokeDex /> } />
              <Route path="/nopokemon" element={ <NoPokemon />} />
              <Route path="/pokemon/:nombre" element={ <Pokemon />} />
          </Routes>
             
    </>
  )
}
