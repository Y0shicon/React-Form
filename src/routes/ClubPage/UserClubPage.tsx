import { useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import clubPageCSS from "./clubpage.module.css"

export default function AdminClubPage() {
    const clubName = useParams().id;

    const [data, setData] = useState<any>([])
    const [clubData, setClubData] = useState({} as any)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/data/formData.json',
                {
                    headers:
                        { 'Content-Type': 'application/json', 'Accept': 'application/json' }
                })
            const data_json = await response.json()
            setData(data_json)
        }
        fetchData()
        if (data.length > 0) {
            const clubData = data.filter((club: any) => club["clubName"] === clubName)[0]
            setClubData(clubData)
        }
    }, [data, clubName])

    return (
        <>
            <h1>Hi we are the {clubData.clubName}</h1>
            <p>{clubData.clubDescription}</p>
            <Link to={`/clubs/${clubName}/recruitment`}>Apply to {clubName}</Link>
        </>
    );
}
