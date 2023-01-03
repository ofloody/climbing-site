import { ReactElement, useState } from "react";
import "rbx/index.css";
import { Container, Button, Field, Label, Control, Input } from "rbx";
import { useNavigate } from "react-router-dom";

const PASSWORD = "developer";


export default function Login(): ReactElement {
    const [inputPass, setInputPass] = useState<string>("");

    const navigate = useNavigate();
  
    const onContinue = () => {
        if(inputPass == PASSWORD) {
            navigate("/log-session");
        } else {
            navigate("/login");
            setInputPass("");
        }
    }

    return(
        <Container>
            <h1>
                Login
            </h1>

            <Field>
                <Label>Password</Label>
                <Control>
                    <Input type="password" placeholder="password" 
                    onChange ={(e: any) => setInputPass(e.currentTarget.value)}/>
                </Control>
            </Field>
            <Field>
                <Control>
                    <Button color="success" onClick={onContinue}>Continue</Button>
                </Control>
            </Field>
        </Container>
    );
}
