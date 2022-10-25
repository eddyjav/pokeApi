import { createSlice } from '@reduxjs/toolkit';

export const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState: {
        isLoading: true,
        pokemons: [],
        page: 0
    },
    reducers: {
        loadingPokemons: ( state ) => {
            state.isLoading = true;
        },
        getingPokemons: ( state, action ) => {
            state.isLoading= false;
            state.pokemons = action.payload.pokemons;
            state.page = action.payload.page;
        }
    }
});


// Action creators are generated for each case reducer function
export const { loadingPokemons, getingPokemons } = pokemonsSlice.actions;