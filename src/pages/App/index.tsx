import { Outlet } from "react-router-dom";
import { Container } from "./styles";

export function App() {
  return (
    <Container>
      <header>Header</header>

      <main><Outlet /></main>
      
      <footer>Footer</footer>
    </Container>
  );
}