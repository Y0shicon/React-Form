import NameQuestion from "./components/NameQuestion"
import SmallNumber from "./components/smallNumber"
import { useEffect, useState } from "react"

function App() {
  const [clubIndex, setclubIndex] = useState(0)
  const [data, setData] = useState([])
  let clubData = {}

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('src/data/formData.json')
      const data_json = await response.json()
      setData(data_json)
    }
    fetchData()
  },[])

  // When data is loaded, set clubData to the first club
  // That is when data.length becomes > 0, and hence the following code only runs after the API is loaded
  if (data.length > 0) console.log(data[clubIndex]["questions"][0]["question"])

  return (
    <div>
      <NameQuestion />
      <SmallNumber question="What is your age?" />
    </div>
  )
}

export default App
