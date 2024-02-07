//Este comando faz a requisição da API
import { useQuery } from "@tanstack/react-query";
import { API } from "../configs/api";
import { Pokemon } from "../@types/pokemon";
import { useQueryPokemonPage } from "./useQueryPokemonPage";

  async function getPokemonFiltered(name: string) {
    const { data } = await API.get(`/pokemon?limit=100000&offset=0`);

    const allPokemon = [...data.results];

    const pokemonFiltered = allPokemon.filter((pokemon) => {
      if(name) return pokemon.name.includes(name.toLowerCase());
    });

    const pokemonPromisses = pokemonFiltered.map(
      async (pokemon: { url: string }) => {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        return data;
      }
    );

    const pokemonList = await Promise.all(pokemonPromisses);  /*👈 Código Top Zeira { Promise.all }*/
    return pokemonList as Pokemon[];
  }

  export function useQueryPokemonFiltered(name: string) {
    const query = useQuery({
      queryKey: ["getFilteredPokemon", name],
      queryFn: () => getPokemonFiltered(name),
    });

    return query;
}

