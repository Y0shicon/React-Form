import { useState } from "react";

// write a function to make a question asking the user their name

export default function NameQuestion(props : {question:string}) {
    const [name, setName] = useState("");
    
    return (
        <>
        <label>
            {props.question.concat(" : ")}
            <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            />
        </label>
        <p>Hello, {name}!</p>
        </>
    );
    }
