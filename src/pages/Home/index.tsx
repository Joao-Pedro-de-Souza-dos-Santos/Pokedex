import axios from "axios";
import { Container } from "./style";
import { useQueryPokemonPage } from "../../hooks/useQueryPokemonPage";
import { PokemonCard } from "../../components/PokemonCard";

export function Home() {

    const { data } = useQueryPokemonPage();
    console.log(data);
    

    return (
        <Container>
            <h1>{"Bem vindo(a) à Pokedex do Reprograma Júcas"}</h1>

            <div className="gridCards">
                {data?.map((pokemon) => {
                    return (
                        <PokemonCard pokemon = {pokemon} />
                    );
                })}
            </div>
        </Container>
    );
}