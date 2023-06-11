import { useState } from "react";

export default function NameQuestion() {
    const [name, setName] = useState("");
    
    return (
        <div>
        <label>
            What is your name?
            <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            />
        </label>
        <p>Hello, {name}!</p>
        </div>
    );
    }
