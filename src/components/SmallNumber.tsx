import { useState } from "react";

export default function SmallNumber(props : {question : string}) {
    const [number, setNumber] = useState('');
    
    return (
        <div>
        <label>
            {props.question.concat(" : ")}
            <input
            type="tell"
            value={number}
            onChange={(event) => setNumber(event.target.value)}
            />
        </label>
        <p>Your favorite number is {number}!</p>
        </div>
    );
    }