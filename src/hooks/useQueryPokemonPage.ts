//Este comando faz a requisição da API
import { useQuery } from "@tanstack/react-query";
import { API } from "../configs/api";
import { Pokemon } from "../@types/pokemon";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useQueryPokemonPage() {
  const [ page, setPage ] = useState(1);
  const [ limit, setLimit ] = useState(30);
  const [ totalPages, setTotalPages ] = useState(1);

  const navigate = useNavigate();

  async function getPokemonPage({ page = 1, limit = 30 }) {
    const offset = (page - 1) * limit;

    const { data } = await API.get(`/pokemon?limit=${limit}&offset=${offset}`);

    const pokemonPromisses = data.results.map(
      async (pokemon: { url: string }) => {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        return data;
      }
    );

    const pokemonData = await Promise.all(pokemonPromisses);  /*👈 Código Top Zeira { Promise.all }*/

    const totalPokemon = data.count;
    const totalPagesApi = Math.ceil(totalPokemon / limit);

    if(totalPages != totalPagesApi) setTotalPages(totalPagesApi);

    return pokemonData as Pokemon[];
  }

  function nextPage() {
    setPage((prevValue) => prevValue + 1);
    navigate(`?page=${page + 1}`);
  }

  function prevPage() {
    setPage((prevValue) => prevValue - 1);
    navigate(`?page=${page - 1}`);
  }

  const query = useQuery({
    queryKey: ["getPokemonPage", page, limit],
    queryFn: () => getPokemonPage({ page, limit }),
  });

  return {
    ...query, page, totalPages,
    setLimit, nextPage, prevPage,
  };
}
