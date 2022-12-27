import { ReactElement } from "react";
import "rbx/index.css";
import { Container, Button } from "rbx";

interface StatsProps {
    currentDay: number;
}

export default function Login(): ReactElement {
    return(
        <Container>
            <h1>
                Login
            </h1>
        </Container>
    );
}
