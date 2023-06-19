import { Link, useActionData } from "react-router-dom";
import navbar from './NavBar.module.css'
import { useEffect } from "react";
import axios from "axios";

const newItem = {
    "clubName": "Dance Club 2",
    "clubDescription": "Dance Club is a club that dances even when there is no music.",
    "clubPresident": "John Doe 2",
    "clubEmail": "abc@gmail.com",
    "clubPhone": "1234567890",
    "clubWebsite": "www.abc.com",
    "questions": [
        {
            "question": "What is your name?",
            "type": "name"
        },
        {
            "question": "What is your age?",
            "type": "number"
        }, {
            "question": "When did you start dancing?",
            "type": "number"
        },
        {
            "question": "Bits ID",
            "type": "small text"
        }
    ]
}

export default function NavBar() {

    function postData() {
        fetch("http://localhost:5173/data/formData.json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newItem)
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
    }

    useEffect(() => {
        fetch("https://bits-clubs.onrender.com/api/v1/clubs/",
            {
                method: "GET",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "http://localhost:5173/"
                }
            })
            .then((res) => res.json())
            .then((data) => console.log(data))
    }
        ,
         [])

    return (
        <>
            <div className={navbar.navbar}>
                <Link to="/">Home</Link>
                <Link to="/clubs">All Clubs</Link>
                <Link to="/Form">Form Generator</Link>
            </div>

            <button onClick={postData}>Post Data</button>
        </>
    )
}