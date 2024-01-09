import { PokemonType } from "../../@types/pokemon";
import { Container } from "./style";

export type TypePorps = { type: PokemonType; size?: number}; //Tipagem Explícita, pode ou não ser definida "size?"

export function CardType({ type,  size = 10 }: TypePorps) {
  return <Container type={type} size={size}>{type}</Container>;
}
