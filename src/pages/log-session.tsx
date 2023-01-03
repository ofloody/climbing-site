import { Container, Input, Control, Label, Button} from "rbx";
import { ReactElement, useState} from "react";
import TimeInput from "react-input-time";
import { useNavigate } from "react-router-dom";


interface LogEntry {
    date: Date,
    startTime: number,
    endTime: number,
    effort: number,
    location: string,
    maxSend: number,
}

export default function LogSession(): ReactElement {

    const [entry, setEntry] = useState<LogEntry>({date: new Date(0), startTime: -1, endTime: -1, effort: -1, location: "", maxSend:-1});
    const [date, setDate] = useState<Date>(new Date(0));
    const [startTime, setStartTime] = useState<number>(-1);
    const [endTime, setEndTime] = useState<number>(-1);
    const [effort, setEffort] = useState<number>(-1);
    const [location, setLocation] = useState<string>("");
    const [maxSend, setMaxSend] = useState<number>(-1);


    const navigate = useNavigate();
    
    const logSess = () => {
        setEntry({date, startTime, endTime, effort, location, maxSend});
        //submit to firestore db

        navigate("/");
    }
    
    return(
        <Container>
            
            <h1>Log Session</h1>

                <Label>Date</Label>
                <Control>
                    <Input type="date" onChange ={(e: any) => setDate(e.currentTarget.value)}/>
                </Control>
                
                <div>

                    <Label>Start Time:</Label>
                    <Control>
                        <TimeInput initialTime='0:00' value={startTime} onChange={(e: any) => setStartTime(e.currentTarget.value)}/>
                    </Control>

                    <Label>End Time:</Label>
                    <Control>
                        <TimeInput initialTime='0:00' value={endTime} onChange={(e: any) => setEndTime(e.currentTarget.value)}/>
                    </Control>
                </div>


                <Label>Effort Rating</Label>
                <Control>
                    <Input type="number" onChange={(e: any) => setEffort(e.currentTarget.value)}/>
                </Control>

                <Label>Gym</Label>
                <Control>
                    <Input type="text" onChange ={(e: any) => setLocation(e.currentTarget.value)}/>
                </Control>

                <Label>Max Send</Label>
                <Control>
                    <Input type="number" onChange ={(e: any) => setMaxSend(e.currentTarget.value)}/>
                </Control>

                <Button color="success" type="submit" onClick={logSess}>Submit</Button>
 

        </Container>
    );
}