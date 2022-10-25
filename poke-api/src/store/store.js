import { configureStore } from '@reduxjs/toolkit'
import { pokemonsSlice } from "./slices/pokemonSlice";

export const store = configureStore({
  reducer: {
    pokemons: pokemonsSlice.reducer,
  },
})