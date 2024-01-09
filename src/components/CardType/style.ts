import styled from "styled-components";
import { TypePorps } from ".";

export const Container = styled.span<TypePorps>`
  background: ${({ theme, type }) => theme.colors.types[type]};
`;
