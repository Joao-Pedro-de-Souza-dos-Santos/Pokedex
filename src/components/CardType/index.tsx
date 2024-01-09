import { PokemonType } from "../../@types/pokemon";
import { Container } from "./style";

export type TypePorps = { type: PokemonType };

export function CardType({ type }: TypePorps) {
  return <Container type={type}>{type}</Container>;
}
