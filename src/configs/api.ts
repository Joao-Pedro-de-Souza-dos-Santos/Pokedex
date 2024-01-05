//Esse script serve para fazer a conexão e a configuração da API pokedex
import axios from "axios";

const envAPI = import.meta.env.VITE_API;

export const API = axios.create({ baseURL: envAPI, });


