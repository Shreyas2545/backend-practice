import { useState , useEffect } from 'react'
import axios from 'axios'

function App() {
  const [name, setName] = useState("")
  useEffect(() => {
      axios.get('/info')
      .then((response) => {
        setName(response.data)
      })
      .catch((error)=>{ 
        console.log(error); 
      })
    },[])
  return (
    <>
    <h1>This is a backend trial </h1>
    <h1>data Fetched from backend : {name} </h1>
    


    </>
  )
}

export default App
