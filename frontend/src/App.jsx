import { useState , useEffect } from 'react'
import axios from 'axios'

function App() {
  const [name, setName] = useState("");
  const [age,setAge] = useState();
  useEffect(() => {
      axios.get('/info')
      .then((response) => {
        setName(response.data)
      })
      .catch((error)=>{ 
        console.log(error); 
      })
    },[])

 useEffect(() => {
      axios.get('/age')
      .then((response) => {
        setAge(response.data)
      })
      .catch((error)=>{ 
        console.log(error); 
      })
    },[])

  return (
    <>
    <h1>This is a backend trial </h1>
    <h1>data Fetched from backend : {name} </h1>
    <h1>data Fetched from backend : {age} </h1>
    </>
  )
}

export default App
