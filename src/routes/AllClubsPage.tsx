import {useEffect, useState} from "react";
import { Link } from "react-router-dom";

export default function AllClubs() {

    // Making a variable to contain all the club names when they are fetched

    //Give the data a type of any so that it can be used in the map function below
    const [data, setData] = useState<any>([])
    const [clubNames, setClubNames] = useState([])

    // Fetching the data from the json file
    useEffect (() => {
        const fetchData = async () => {
            const response = await fetch('src/data/formData.json')
            const data_json = await response.json()
            setData(data_json)
        }
        fetchData()
    }, [])

    // Making a variable to contain all the club names when they are fetched
    useEffect(() => {
        if (data.length > 0) {
            setClubNames(data.map((club: any) => club["clubName"]))
            console.log(clubNames)
        }
    }, [data])

    const clubsList = clubNames.map((clubName: any) => <li key={clubName}><Link to= {`/Clubs/${clubName}`}>{clubName}</Link></li>)

    return (
        <div>
            <h1>All Clubs</h1>
            <ul>
                {clubsList}
            </ul>
        </div>
    )
}