import { useState, useLayoutEffect, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import clubPageCSS from "./clubpage.module.css"
import axios from "axios";

export default function AdminClubPage() {
    const clubName = useParams().id;

    const [data, setData] = useState<any>([])
    const [dataReceived, setDataReceived] = useState(false)
    const [clubData, setClubData] = useState({} as any)

     const url = "/data/formData.json"

    const fetchData =  () => {
        return (
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setDataReceived(true)
            })
        )
    }

    // Fetching data from json file and setting it to state data and clubData evrytime the data changes
    useLayoutEffect(() => {
        fetchData()
        if (data.length > 0) {
            const clubData = data.filter((club: any) => club["clubName"] === clubName)[0]
            setClubData(clubData)
        }
    }, [dataReceived])

    function handleSubmit(e:any){
        e.preventDefault()
        const NewClubDescription = e.target.clubDescription.value
        const clubData = data.filter((club: any) => club["clubName"] === clubName)[0]
        clubData.clubDescription = NewClubDescription
        setClubData(clubData)
        setData(data)
        e.target.reset()
    }

    // Putting the data back to the json file
    useEffect(() => {
        axios.put('http://localhost:5173/data/formData.json', clubData).then((res) => {
            console.log(res)
        }
        )
    }, [data])

    return (
        <>
            <h1>Hi we are the {clubData.clubName}</h1>
            <form onSubmit={handleSubmit} action="">
            <textarea id="clubDescription" className={clubPageCSS.editablePara} defaultValue={clubData.clubDescription} />
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
            </form>
            <Link to={`/clubs/${clubName}/recruitment`}>Apply to {clubName}</Link>
        </>
    );
}
