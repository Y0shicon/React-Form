import { useState } from "react";

export default function SmallTextQuestion(props : {question : string}) {
    const [text, setText] = useState('');

    return (
        <div>
        <label>
            {props.question.concat(" : ")}   
            <input
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
            />
        </label>
        <p>Your {props.question} is {text}!</p>
        </div>
    );
    }