import NameQuestion from "../components/NameQuestion"
import SmallNumber from "../components/SmallNumber"
import SmallTextQuestion from "../components/SmallTextQuestion"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function App() {

    const clubName = useParams().id
    const [questionsSet, setQuestionsSet] = useState([])
    const [data, setData] = useState<any>([])
    const [clubData, setClubData] = useState({} as any)

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('/data/formData.json',
          {headers: 
              {'Content-Type': 'application/json','Accept': 'application/json'}
          })
          const data_json = await response.json()
          setData(data_json)
        }
        fetchData()
      }, [])

    // When data is loaded, set clubData to the first club
    // That is when data.length becomes > 0, and hence the following code only runs after the API is loaded
    useEffect(() => {
        if (data.length > 0) {
            const clubData = data.filter((club: any) => club["clubName"] === clubName)[0]
            console.log(clubData)
            setClubData(clubData)
            //ts-ignore
            setQuestionsSet(clubData["questions"].map((question: any) => {
                if (question["type"] === "name") {
                    return <NameQuestion key={question["question"]} question={question["question"]} />
                } else if (question["type"] === "number") {
                    return <SmallNumber key={question["question"]} question={question["question"]} />
                } else if (question["type"] === "small text") {
                    return <SmallTextQuestion key={question["question"]} question={question["question"]} />
                }
            }
            ))            
        }
    }, [data])

    return (
        <>
            <h1>Hi we are the {data.length > 1 ? clubData["clubName"] : ''}</h1>
            <form action="">
                {questionsSet}
            </form>
        </>
    )
}
