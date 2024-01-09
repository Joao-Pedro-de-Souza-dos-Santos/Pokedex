import axios from "axios";
import { Container } from "./style";
import { useQueryPokemonPage } from "../../hooks/useQueryPokemonPage";
import { PokemonCard } from "../../components/PokemonCard";
import { Link } from "react-router-dom";

export function Home() {

    const { data, isLoading, error } = useQueryPokemonPage();
    if(error) console.error();
    console.log(data);
    

    return (
        <Container>
            <h1>{"Bem vindo(a) à Pokedex do Reprograma Júcas"}</h1>

            {isLoading && <span className="feedbackLoading">Processando...</span>}
            {!isLoading && error && <span className="feedbackLoading">Error...</span>}

            <div className="gridCards">
                {data?.map((pokemon) => {
                    return (
                        <Link to={`/details/${pokemon.name}`} key={pokemon.id}>
                            <PokemonCard pokemon = {pokemon} />
                        </Link>
                    );
                })}
            </div>
        </Container>
    );
}