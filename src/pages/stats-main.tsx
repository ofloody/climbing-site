import { ReactElement } from "react";
import "rbx/index.css";
import { Container, Button } from "rbx";

interface StatsProps {
    currentDay: number;
}

export default function StatsMainApp(): ReactElement {
    return(
        <Container>
            <h1>Stats Page</h1>
        <a href="/login">
            <Button text>Log Session</Button>
        </a>
        </Container>
    );
}
