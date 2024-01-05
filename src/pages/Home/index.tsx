import axios from "axios";
import { Container } from "./style";

export function Home() {

    const{ data } = axios.get("/pokemon");

    return (
        <Container>
            <h1>Home</h1>
        </Container>
    );
}