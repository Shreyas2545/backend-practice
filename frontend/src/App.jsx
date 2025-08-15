import { useState , useEffect } from 'react'
import axios from 'axios'

function App() {
  const [name, setName] = useState("");
  const [age,setAge] = useState();
  const [marks,setMarks] = useState();
  useEffect(() => {
      axios.get('/app/info')
      .then((response) => {
        setName(response.data)
      })
      .catch((error)=>{ 
        console.log(error); 
      })
    },[])

 useEffect(() => {
      axios.get('/app/marks')
      .then((response) => {
        setMarks(response.data)
      })
      .catch((error)=>{ 
        console.log(error); 
      })
    },[])

 useEffect(() => {
      axios.get('/app/age')
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
    <h1>data Fetched from backend : {marks} </h1>
    </>
  )
}

export default App
