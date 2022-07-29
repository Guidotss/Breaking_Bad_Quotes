import { useState,useEffect } from 'react'
import { Form,CharacterGrid } from "./components"
import { NavBar } from './components/navbar/NavBar';
import { useFetch } from './hooks'

function App() {
  const [name, setName] = useState('');
  const { data ,setData,loading} = useFetch(`https://www.breakingbadapi.com/api/characters?name=${name}&limit=1`); 

  useEffect(()  => {
    setData(`https://www.breakingbadapi.com/api/characters?name=${name}`); 
  },[name])

  return (
    <>
      <NavBar setName = {setName}/>
      <CharacterGrid data = { data } loading={loading} />
    </>
  )
}

export default App
