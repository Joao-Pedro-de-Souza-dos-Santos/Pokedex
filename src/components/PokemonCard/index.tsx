export function PokemonCard({ pokemon }) {
    return (
        <div>
            <img src={pokemon.sprites.other["official-artwork"].front_default} alt="" height={100}/>
            <strong>{pokemon.name}</strong>
        </div>
    );
}