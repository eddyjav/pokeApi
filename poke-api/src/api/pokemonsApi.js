import axios from "axios";
import { getEnvVariables } from "../helpers/getEnvVariables";

const { VITE_API_URL } = getEnvVariables()
console.log(VITE_API_URL);

export const pokemonsApi = axios.create({
    // baseURL: 'https://pokeapi.co/api/v2'
    baseURL: 'https://pokeapi-jv.herokuapp.com/api/'

    
    
});